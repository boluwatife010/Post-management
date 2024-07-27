import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './db'
import userRouter from './src/route/userroute'
import postRouter from './src/route/postroute'
import mongoose from 'mongoose';
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/post', postRouter);

/*
app.listen(PORT, async () => {
    console.log('Server is running at port 8088.')
    await mongoose.connect('mongodb://127.0.0.1/prescreening');
    console.log('Connected to mongodb.')
})

*/