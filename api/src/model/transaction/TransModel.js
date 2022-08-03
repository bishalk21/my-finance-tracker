import TransSchema from "./TransSchema.js";

export const addTransaction = async (obj) => {
  console.log(obj);
  return await TransSchema(obj).save();
};

// filter out the user from the database
export const getTransaction = async (filter) => {
  console.log(filter);
  return await TransSchema.find(filter);
};

// filter out the user from the database
export const deleteTransaction = async (filter) => {
  return await TransSchema.findOneAndDelete(filter);
};