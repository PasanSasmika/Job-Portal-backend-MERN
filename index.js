import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { AddJob } from './controllers/Jobcontroller.js';
import { signup } from './controllers/UserController.js';


dotenv.config()

const app = express()
const port = process.env.PORT || 5003;

const mongoUrl = process.env.MONGO_URI

mongoose.connect(mongoUrl,{})

const connection = mongoose.connection;

connection.once("open",()=>{
  console.log("Database connected");
})



//middleware
app.use(bodyParser.json());
app.use(express.json())
app.use(cors())

app.use('/api/users', signup);
app.use('/api/job', AddJob);



app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})



