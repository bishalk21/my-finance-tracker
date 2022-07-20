import UsrSchema from "./UsrSchema.js";

export const insertUser = async (firstUser) => {
  //   console.log(firstUser);
  return await UsrSchema(firstUser).save();
};
