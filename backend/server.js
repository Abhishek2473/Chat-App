import express from "express";
import dotenv from "dotenv"
import connectToMongoDB from "./db/connectToMongoDB.js";
 import authRoutes from './routes/auth.routes.js'
import cookieParser from "cookie-parser";
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.route.js'


import jwt from "jsonwebtoken";
import User from "./models/user.model.js";


const app=express()
dotenv.config()
const PORT= process.env.PORT ||5000
app.use(express.json())
app.use(cookieParser())



app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);
 app.use("/api/users", userRoutes);

app.listen(PORT,()=>{
    connectToMongoDB()
    console.log('server is running on',PORT);
    
})