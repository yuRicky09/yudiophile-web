import User from "../models/userModel.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const signToken = function (id) {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

const signup = asyncHandler(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });

  const token = signToken(user._id);

  res.status(201).json({
    status: "success",
    message: "create user success",
    data: {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      },
    },
  });
});

const login = async (req, res, next) => {};

export { signup, login };
