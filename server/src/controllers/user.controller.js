import { UserModel } from "../models/users.model.js";
import { getSuccessResponse } from "../utils/response.util.js";
import { asyncHandler } from "../utils/asynHandler.util.js";
import createHttpError from "http-errors";

export const userRegistration = asyncHandler(async (req, res) => {
  const { firstName, lastName, middleName, email, password } = req.body;

  const isUserExists = await UserModel.findOne({
    email,
    isDeleted: false,
  }).lean();

  if (isUserExists) {
    throw createHttpError(400, "Email already exists.");
  }

  const userData = new UserModel({
    firstName,
    lastName,
    middleName,
    email,
    password,
  });

  await userData.save();

  res
    .status(200)
    .json(getSuccessResponse({ message: "User created successfully." }));
});

export const getUsers = asyncHandler(async (_req, res) => {
  const users = await UserModel.find({ isDeleted: false }).select(
    "-password -isDeleted -__v"
  );

  if (!users.length) throw createHttpError(404, "Don't have any users");

  res.json(
    getSuccessResponse({
      message: "Users retrieved successfully",
      data: { users },
    })
  );
});
