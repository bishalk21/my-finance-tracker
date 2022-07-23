import express from "express";
const app = express();
import cors from "cors";

connectDB();

const port = 8000;

app.use(cors()); // enable cross-origin resource sharing
app.use(express.json()); // enable json parsing

import usrRouter from "./src/routers/usrRouter.js";
import transactionRouter from "./src/routers/transactionRouter.js";
import { connectDB } from "./src/config/dbConfig.js";
app.use("/api/v1/user", usrRouter);
app.use("/api/v1/transaction", transactionRouter);

app.use("/", (req, res) => {
  res.json({
    status: "success",
    message: "in the API base",
  });
});

// app.use("/", (req, res) => {
//   // default route
//   try {
//     res.json({
//       status: "success",
//       message: "<h1>Coming Soon....</h1>",
//     });
//   } catch (error) {
//     error.status = 500;
//     next(error);
//   }
// });

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

// app.use((error, req, res, next) => {
//   const status = error.status || 404;

//   res.status(status).json({
//     status: "error",
//     message: error.message,
//   });
// });

app.listen(port, (error) => {
  //listen is for
  error && console.log(error);
  console.log(`Server is running on port http://localhost:${port}`);
});
