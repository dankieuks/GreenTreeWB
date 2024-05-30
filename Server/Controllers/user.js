import Users from "../Models/user.js";

import asyncHandler from "express-async-handler";
import token from "./../Middlewares/jwt.js";
import { response } from "express";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await Users.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "Email đã tồn tại",
        data: null,
      });
    }

    const newUser = await Users.create({
      username,
      email,
      password,
    });

    if (!newUser) {
      return res.status(500).json({
        message: "Đăng ký thất bại",
        data: null,
      });
    }

    res.status(201).json({
      message: "Đăng ký thành công",
      data: {
        _id: newUser._id,
        username,
        email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Đăng ký thất bại",
      data: null,
    });
  }
};

const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "Email or password is missing",
    });
  }
  const user = await Users.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }
  const AccessToken = jwt.sign(
    {
      email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1m" }
  );
  return res.status(200).json({
    status: "ok",
    message: "Login success",
    data: {
      email,
      AccessToken,
      role: user.role,
    },
  });
});

const getAll = async (req, res) => {
  try {
    const user = await Users.find().then((data) => {
      return res.status(200).json({
        success: data,
        data: data,
      });
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export { getAll, registerUser, userLogin };
