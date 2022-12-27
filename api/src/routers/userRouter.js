import express from "express";
import { insertUser } from "../model/users/userModel.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
    try {
        const result = await insertUser(req.body);
        res.json({
            status: "success",
            message: "Please check your email to verify",
            result
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