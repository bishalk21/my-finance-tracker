import TransSchema from "./TransSchema.js";

export const addTransaction = async (obj) => {
  console.log(obj);
  return await TransSchema(obj).save();
};
