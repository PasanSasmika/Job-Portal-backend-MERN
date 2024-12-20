import express from 'express';
import { AddJob } from '../controllers/Jobcontroller.js';


const Jobrouter = express.Router();

Jobrouter.post("/", AddJob)

export default Jobrouter;