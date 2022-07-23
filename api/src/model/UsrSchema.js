import mongoose from "mongoose";
const UsrSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      default: "inactive",
    },
    firstName: {
      type: String,
      required: true,
      minlength: 1,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 1,
    },
    email: {
      type: String,
      required: true,
      minlength: 1,
      unique: true,
      index: 1,
    },
    password: {
      type: String,
      required: true,
      minlength: 1,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Usr", UsrSchema); // usrs is the collection name
