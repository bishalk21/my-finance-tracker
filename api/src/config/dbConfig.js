import mongoose from "mongoose";

export const connectDB = () => {
  try {
    const con = mongoose.connect(process.env.MONGO_CLIENT)
    if (con) {
      console.log("Connected to MongoDB");
    }
  } catch (err) {
    console.log(err);
  }
};