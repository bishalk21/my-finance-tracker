import mongoose from "mongoose";

const TransSchema = new mongoose.Schema(
  {
    UserId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      require: true,
    },
    date: {
      type: Date,
      default: Date.now(),
      required: true,
    },
    type: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

export default mongoose.model("Trans", TransSchema); // trans
