import express from 'express';
import { loginUser, signup } from '../controllers/UserController.js';
import User from '../Model/Usermodel.js';






const Userrouter = express.Router();

// User Signup Route
Userrouter.post('/signup', signup);
Userrouter.post('/login', loginUser)

export default Userrouter;