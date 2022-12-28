import express from "express";
import { getOneUser, insertUser } from "../model/users/userModel.js";
const router = express.Router();

router.post("/login", async (req, res, next) => {
    try {

        const {email, password} = req.body;

        // const user = await getOneUser({email: email});
        const user = await getOneUser({email});

      if  (user?.password === password) {
        user.password = undefined;
       return res.json({
            status: "success",
            message: "Login Successfully",
            user
        })
      }
     res.json({
            status: "error",
            message: "Invalid Credentials",
        })
    } catch (error) {
        next(error);
    }
})

router.post("/", async (req, res, next) => {
    try {
        const result = await insertUser(req.body);

        result?._id ? 
        res.json({
            status: "success",
            message: "Your account has been created successfully, please go to login page and login!",
            result
        }) : res.json ({
            status: "error",
            message: "Something went wrong, please try again later!",
        })
    } catch (error) {
        if(error.message.includes("E1100 duplicate key error collection")){
            error.status = 200;
            error.message = "Email already exists";
        }
        next(error);
    }
})

export default router;