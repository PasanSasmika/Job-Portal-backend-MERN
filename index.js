import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Jobrouter from './routers/JobRouter.js';
import Userrouter from './routers/UserRouter.js';
import jwt from 'jsonwebtoken';


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

app.use(
  (req,res,next)=>{

  const token =  (req.header("Authorization"))?.replace("Bearer ", "")
  console.log(token)

  if(token != null){
    jwt.verify(token, process.env.SECRET, (error, decoded)=>{
      if(!error){
        req.user = decoded
      }
    })
  }
  next()
  }
)

app.use('/api/users', Userrouter);
app.use('/api/job', Jobrouter);



app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})



