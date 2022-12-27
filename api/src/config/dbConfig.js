import mongoose from "mongoose";

export const dbConnect = () => {
    try {
        const MONGO_CLIENT = "mongodb://localhost/expense_tracker";
        const con = mongoose.connect(MONGO_CLIENT);
        if (con) {
            console.log("Database Connected");
        }
    } catch (error) {
        console.log(error);
    }
}

