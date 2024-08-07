import express from 'express';
const router = express.Router();
import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
// chaining of multiple routes having different req methods
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
