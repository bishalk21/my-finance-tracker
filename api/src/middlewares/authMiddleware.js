import { getUser } from "../model/UsrModel.js";

export const authMiddleware = async (req, res, next) => {
  try {
    // do authorization header available
    const { authorization } = req.headers;
    if (authorization) {
      // do user exist in the db
      const user = await getUser({
        _id: authorization,
      });
      if (user?._id) {
        req.userInfo = user;
        return next();
      }
    }
    res.json({
      status: "error",
      message: "User not found",
    });
  } catch (error) {
    next(error);
  }
};
