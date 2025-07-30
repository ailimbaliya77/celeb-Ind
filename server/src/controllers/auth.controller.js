import { UserModel } from "../models/users.model.js";
import { asyncHandler } from "../utils/asynHandler.util.js";
import createHttpError from "http-errors";
import {
  generateToken,
  verifyToken,
} from "../utils/jwt.util.js";
import { TokenModel } from "../models/token.model.js";
import { getSuccessResponse } from "../utils/response.util.js";
import bcrypt from "bcryptjs";

const JWT_ACCESS_EXPIRE_TIME = process.env.JWT_ACCESS_EXPIRE_TIME;
const JWT_REFRESH_EXPIRE_TIME = process.env.JWT_REFRESH_EXPIRE_TIME;
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

export const authLogin = asyncHandler(async (req, res) => {

  const { email, password } = req.body;

  const user = await UserModel.findOne({ email }).select("_id password");
  if (!user) throw createHttpError(400, "Invalid credentials");

  const isMatch = await user.checkPassword(password);
  if (!isMatch) throw createHttpError(400, "Invalid credentials");

  const accessToken = generateToken(
    user,
    JWT_ACCESS_SECRET,
    JWT_ACCESS_EXPIRE_TIME + "m"
  );
  const refreshToken = generateToken(
    user,
    JWT_REFRESH_SECRET,
    JWT_REFRESH_EXPIRE_TIME + "d"
  );

  const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

  await TokenModel.create({
    userId: user._id,
    refreshToken: hashedRefreshToken,
    device: req.headers["user-agent"],
    ip: req.ip,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: false,
    secure: false,
    sameSite: "Strict",
    path: "localhost:3000/api/v1/auth/refresh",
    maxAge: JWT_REFRESH_EXPIRE_TIME * 24 * 60 * 60 * 1000,
  });

  res.json(
    getSuccessResponse({
      message: "Logged in successfully",
      data: {
        accessToken,
        refreshToken,
      },
    })
  );
});

export const issueAccessToken = asyncHandler(async (req, res) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) throw createHttpError(401, "No token provided");

  const decoded = verifyToken(refreshToken, JWT_REFRESH_SECRET);
  const userId = decoded.id;

  const tokenDocs = await TokenModel.find({ userId })
    .select("refreshToken")
    .lean();

  let matchedDoc = null;

  for (const doc of tokenDocs) {
    const isMatch = await bcrypt.compare(refreshToken, doc.refreshToken);

    if (isMatch) {
      matchedDoc = doc;
      break;
    }
  }

  if (!matchedDoc) throw createHttpError(403, "Invalid or expired refresh token");

  const newAccessToken = generateToken(
    { _id: userId },
    JWT_ACCESS_SECRET,
    JWT_ACCESS_EXPIRE_TIME + "m"
  );

  res.json(
    getSuccessResponse({
      message: "Access token generated successfully",
      data: { accessToken: newAccessToken },
    })
  );
});

export const logout = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) throw createHttpError(400, "No refresh token provided");

  const decoded = verifyToken(refreshToken, JWT_REFRESH_SECRET);
  const userId = decoded.id;

  const tokenDocs = await TokenModel.find({ userId }).select("refreshToken");

  let matchedDoc = null;

  for (const doc of tokenDocs) {
    const isMatch = await bcrypt.compare(refreshToken, doc.refreshToken);

    if (isMatch) {
      matchedDoc = doc;
      await doc.deleteOne();
      break;
    }
  }

  if (!matchedDoc) throw createHttpError(403, "Invalid or expired refresh token");

  res.json(getSuccessResponse({ message: "Logged out successfully" }));
});

export const logoutAll = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) throw createHttpError(400, "No refresh token provided");

  const decoded = verifyToken(refreshToken, JWT_REFRESH_SECRET);
  const userId = decoded.id;

  await TokenModel.deleteMany({ userId });

  res.json(getSuccessResponse({ message: "Logged out from all devices" }));
});
