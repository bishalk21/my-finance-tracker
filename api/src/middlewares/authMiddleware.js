import { getOneUser } from "../model/users/userModel.js";

export const authMiddleware = async (req, res, next) => {
    try {
        // do authorization header available
        const {authorization} = req.headers;

        if (authorization) {
            // do user exist available in db
            const user = await getOneUser({_id: authorization})

            if (user?._id){
                // do user exist 
                req.userInfo = user;
                return next();
            }
        }
        res.status(403).json({
            status: "error",
            message: "Unauthorized"
        })
    } catch (error) {
        next(error);
    }
}