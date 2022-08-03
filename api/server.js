import express from "express"; // express is a function that helps in creating a server
const app = express();
import cors from "cors";

const port = 8000;

app.use(cors()); // enable cross-origin resource sharing
app.use(express.json()); // enable json parsing

import usrRouter from "./src/routers/usrRouter.js";
import transactionRouter from "./src/routers/transactionRouter.js";
import { connectDB } from "./src/config/dbConfig.js";
import { authMiddleware } from "./src/middlewares/authMiddleware.js";
connectDB();
app.use("/api/v1/user", usrRouter);
app.use("/api/v1/transaction", authMiddleware, transactionRouter);

app.use("/", (req, res) => {
  // app
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
    console.log(error);
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
  // app.listen is a function that helps in starting a server
  //listen is for
  error && console.log(error);
  console.log(`Server is running on port http://localhost:${port}`);
});
