import { ZodError } from "zod/v3";
import { getFailureResponse } from "../utils/response.util.js";

export const errorHandler = (err, _req, res, _next) => {
  const { status = 500 } = err;
  const errorMessage = err.message || "Something went wrong.";
  const failureResponse = {
    message: errorMessage,
    statusCode: status,
  };

  if (err.type) {
    failureResponse.status = err.type;
  }
  res.status(status).json(getFailureResponse(failureResponse));
};

export const validationHandler = (err, _req, _res, next) => {
  if (err instanceof ZodError) {
    const message = err.issues[0]?.message || "Validation failed";
    const formattedError = {
      message,
      status: 400,
      type: "Validation error",
    };
    return next(formattedError);
  }

  next(err);
};

export const notFoundHandler = (_req, _res, next) => {
  return next(createError(404, "Route not found!"));
}
