import express from 'express';
const app = express()
import cors from 'cors';

const PORT = 8000;

// database
import {dbConnect} from "./src/config/dbConfig.js";
dbConnect();

// middleware
app.use(express.json());
app.use(cors());

// APIS route
import userRouter from "./src/routers/userRouter.js";
app.use("/api/v1/user", userRouter)

// routes -- server side rendering
app.use("/", (req, res, next) => {
    try {
        res.send("<h1>Coming Soon ...</h1>")
    } catch (error) {
        next(error);
    }
})

app.listen(PORT, function(error){
    error && console.log(error);
    console.log(`Server is running on port http://localhost:${PORT}`);
})