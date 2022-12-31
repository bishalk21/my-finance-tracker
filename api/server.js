import 'dotenv/config';
import express from 'express';
const app = express()
import cors from 'cors';
import path from 'path';
// path is node core module helps in accessing path

// directory
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));

const PORT = process.env.PORT || 8000;

// database
import {dbConnect} from "./src/config/dbConfig.js";
dbConnect();

// middleware
app.use(express.json());
app.use(cors());

// APIS route
import userRouter from "./src/routers/userRouter.js";
import transactionRouter from "./src/routers/transactionRouter.js";
import { authMiddleware } from './src/middlewares/authMiddleware.js';
app.use("/api/v1/user", userRouter)
app.use("/api/v1/transaction", authMiddleware, transactionRouter)

// routes -- server side rendering
app.use("/", (req, res, next) => {
    try {
        // res.send("<h1>Coming Soon ...</h1>")
        res.sendFile(path.join(__dirname,  "/frontend/build/index.html"))
    } catch (error) {
        next(error);
    }
})

// error handling
app.use((error, req, res, next) => {
    const status = error.status || 404;
    res.status(status).json({
        status: "error",
        message: error.message
    })
})

app.listen(PORT, function(error){
    error && console.log(error);
    console.log(`Server is running on port http://localhost:${PORT}`);
})