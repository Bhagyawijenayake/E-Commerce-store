//packages
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//utiles
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 5000;

//connect to database
connectDB();

const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('API running...');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});