import express from "express";
const app = express();
import cors from "cors";

const port = 8000;

app.use(cors()); // enable cross-origin resource sharing
app.use(express.json()); // enable json parsing

import connectDB from "./src/config/dbConfig.js";
connectDB();

import usrRouter from "./src/routers/usrRouter.js";
app.use("/api/v1/user", usrRouter);

app.use("/api/v1/user", () => {
  res.json({
    status: "success",
    message: "in the API base",
  });
});

app.use("/", (req, res) => {
  try {
    res.json({
      status: "success",
      message: "<h1>Coming Soon....</h1>",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

app.use((error, req, res, next) => {
  try {
    res.status(error.status || 500);
    res.json({
      status: "error",
      message: error.message,
    });
  } catch (error) {
    next(error);
  }
});

app.listen(port, (error) => {
  //listen is for
  error && console.log(error);
  console.log(`Server is running on port http://localhost:${port}`);
});