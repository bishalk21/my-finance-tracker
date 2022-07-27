import express from "express";
import {
  addTransaction,
  deleteTransaction,
  getTransaction,
} from "../model/transaction/TransModel.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);

    const filter = {
      userId: authorization,
    };

    const trans = await getTransaction(filter);

    res.json({
      status: "success",
      message: "to do",
      trans,
    });
  } catch (error) {
    next(error);
  }
});
// await

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
// const { firstName, lastName, email, password } = req.body;

// delete
router.delete("/:_id", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { _id } = req.params;
    if (authorization && _id) {
      // if user is logged in and has a valid id
      const filter = {
        userId: authorization,
        _id,
      };
      const result = await deleteTransaction(filter);
      if (result._id) {
        return res.json({
          status: "success",
          message: "Transaction deleted",
        });
      }
    }
    return res.json({
      status: "error",
      message: "Please provide authorization and _id",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
