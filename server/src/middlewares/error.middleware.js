import ApiError from "../utils/ApiError.js";

const errorHandler = (
  err,
  req,
  res,
  next
) => {

  let error = err;

  if (!(error instanceof ApiError)) {
    error = new ApiError(
      500,
      error.message || "Internal Server Error"
    );
  }

  return res.status(error.statusCode).json({
    success: error.success,
    message: error.message,
    errors: error.errors,
    data: error.data,
  });
};

export default errorHandler;