// @desc asyncHandler eliminates try catch and automatically throws err in error route (i-e error middleware)
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Auth User' });
});

// @desc    Register a new user
// route    POST /api/users
// @access  public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error('user already exist');
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (!user) {
    res.status(400);
    throw new Error('invalid user data');
  }

  return res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
  });
});

// @desc    logout
// route    POST /api/users/logout
// @access  public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'logout User' });
});

// @desc    Get user profile
// route    GET /api/users/profile
// @access  private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: ' User Profile' });
});

// @desc    update user profile
// route    PUT /api/users/profile
// @access  private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: ' updated Profile' });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
