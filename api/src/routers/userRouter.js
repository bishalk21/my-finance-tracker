import express from "express";
const router = express.Router();

router.post("/", (req, res, next) => {
    try {
        res.json({
            status: "success",
            message: "Please check your email to verify"
        })
    } catch (error) {
        next(error);
    }
})

export default router;