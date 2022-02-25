import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import bearShowcase from './routes/bearShowcase.js'

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/showcase', bearShowcase)

mongoose.connect(MONGO_URI)
    .then(app.listen(PORT, () => {console.log(`Server running at http://localhost:${PORT}`)}))
    .catch(err => console.log(err));