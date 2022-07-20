import express from "express";
import { insertUser } from "../model/UsrModel.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  //   const { firstName, lastName, email, password } = req.body;

  try {
    const result = await insertUser(req.body);
    console.log(result);
    res.json({
      status: "success",
      message: "in the post",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
export default router;
