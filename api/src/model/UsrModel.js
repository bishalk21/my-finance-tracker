import UsrSchema from "./UsrSchema.js";

export const insertUser = async (firstUser) => {
  //   console.log(firstUser);
  return await UsrSchema(firstUser).save();
};

// filter out the user from the database
export const getUser = async (filter) => {
  return await UsrSchema.findOne(filter);
};
