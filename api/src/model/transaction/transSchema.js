import mongoose from "mongoose";    

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
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