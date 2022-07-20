import mongoose from "mongoose";

const connectDB = () => {
  try {
    const MONGO_CLIENT = "mongodb://localhost/finance-tracker";
    const con = mongoose.connect(MONGO_CLIENT);
    if (con) {
      console.log("Connected to MongoDB");
    }
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
