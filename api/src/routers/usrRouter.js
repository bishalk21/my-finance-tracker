import express from "express";
import { insertUser, getUser } from "../model/UsrModel.js";
const router = express.Router();

// get method for the  page
router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;

    const user = await getUser({
      email,
    });
    //
    if (user?.password === password) {
      user.password = undefined;
      return res.json({
        status: "success",
        message: "Login Successful",
        user,
      });
    }
    res.json({
      status: "error",
      message: "Login Failed",
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  //   const { firstName, lastName, email, password } = req.body;

  try {
    const result = await insertUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "You have successfully registered. Please login.",
          result,
        })
      : res.json({
          status: "error",
          message: "User not created",
          result,
        });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message = "Email already exists";
    }
    next(error);
  }
});
export default router;
