import userSchema from "./userSchema.js";

export const insertUser = (user) => {
    return userSchema(user).save();
}

// function to find user by email - filter is object
export const getOneUser = (filter) => {
    return userSchema.findOne(filter);
}