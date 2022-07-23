import express from "express";
import { addTransaction } from "../model/transaction/TransModel.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    res.json({
      status: "success",
      message: "to do",
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await addTransaction(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "New transaction added",
        })
      : res.json({
          status: "error",
          message: "Transaction not added",
        });
  } catch (error) {
    next(error);
  }
});
//   const { firstName, lastName, email, password } = req.body;

export default router;
