import express from 'express';
import { getTransaction, insertTransaction } from '../model/transaction/transModel.js';
const router = express.Router();

router.post("/",async (req,res,next) => {
    try {
        console.log(req.body);
        const result = await insertTransaction(req.body)
        result?._id ?
        res.json({
            status: "success",
            message: "Transaction added successfully",
            result
        }) : res.json({
            status: "error",
            message: "Something went wrong, please try again later!"
        })
    } catch (error) {
        next(error);
    }
})

// get all transaction for the specific user based on their id
router.get("/", async (req, res, next) => {
    try {
        const {authorization } = req.headers;
        // console.log(authorization);
        // checking user ID with authorization id
        const filter ={
            userId: authorization
        }

        const trans = await getTransaction(filter);
        res.json({
            status: "success",
            message: "Transaction in User",
            trans
        })
    } catch (error) {
        next(error);
    }
})

export default router;