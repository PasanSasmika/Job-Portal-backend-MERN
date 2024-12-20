import express from 'express';
import { AddJob } from '../controllers/Jobcontroller.js';


const router = express.Router();

router.post("/", AddJob)

export default router;