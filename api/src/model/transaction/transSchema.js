import mongoose from "mongoose";    

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
},{
    timestamps: true
})

export default mongoose.model("Transaction", transactionSchema)