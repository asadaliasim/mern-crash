// @desc asyncHandler eliminates try catch and automatically throws err in error route (i-e error middleware)
import asyncHandler from 'express-async-handler';

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
  res.status(200).json({ message: 'register User' });
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
