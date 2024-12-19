import express from 'express';
import { signup } from '../controllers/userController.js';






const router = express.Router();

// User Signup Route
router.post('/signup', signup);

export default router;