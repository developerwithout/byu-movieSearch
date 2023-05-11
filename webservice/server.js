import 'dotenv/config'

import express from "express";
import cors from "cors";
import compression from "compression";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";

import routes from './routes/index.js';

const PORT = 8080;
const app = express();

// APP Setup
app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => res.json({message: "API is up and running..."}))

app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`API is listening on Port ${PORT}`)
})