import express from 'express';
import { creatuser, loginUser } from '../controllers/UserController.js';






const Userrouter = express.Router();

// User Signup Route
Userrouter.post('/', creatuser);
Userrouter.post('/login', loginUser)

export default Userrouter;