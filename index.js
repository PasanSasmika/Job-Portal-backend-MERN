import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const app = express()
const port = process.env.PORT || 5000;

const mongoUrl = process.env.MONGO_URI

mongoose.connect(mongoUrl,{})

const connection = mongoose.connection;

connection.once("open",()=>{
  console.log("Database connected");
})



//middleware

app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{

    res.send('Hello world')
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})



