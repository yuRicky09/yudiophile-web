import userModel from "../models/userModel.js";
import asyncHandler from "../utils/asyncHandler.js";

const signup = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await userModel.create({ name, email, password });

  res.status(201).json({
    status: "success",
    message: "create user success",
    data: {
      user,
    },
  });
});

const login = async (req, res, next) => {};

export { signup, login };
