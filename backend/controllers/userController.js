// @desc asyncHandler eliminates try catch and automatically throws err in error route (i-e error middleware)
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc    Auth user/set token
// route    POST /api/users/auth
// @access  public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await user.matchPassword(password))) {
    res.status(401);
    throw new Error('Invalid email or password');
  }
  generateToken(res, user._id);
  return res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
  });
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
  generateToken(res, user._id);
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
  // set the cookies empty right away
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'user logged out' });
});

// @desc    Get user profile
// route    GET /api/users/profile
// @access  private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

// @desc    update user profile
// route    PUT /api/users/profile
// @access  private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error('User not Found');
  }
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  if (req.body.password) {
    user.password = req.body.password;
  }
  const updatedUser = await user.save();
  res.status(200).json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
  });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
