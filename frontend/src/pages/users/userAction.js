import { toast } from "react-toastify";
import { loginNewUser } from "../../helpers/axiosHelper";
import { setUser } from "./userSlice";

export const loginAction = (obj) => async (dispatch) => {
    // first call axios and get data from server
    const {status, message, user} = await loginNewUser(obj);
    toast[status](message);

    // dispatch the incoming data tto the slice
    if( status ==="success") {
        // window.localStorage.setItem("user", JSON.stringify(user));
        // for security reason
        window.sessionStorage.setItem("user", JSON.stringify(user));
       dispatch(setUser(user));
      }
}

export const userLogoutAction = () => (dispatch) => {
    dispatch(setUser({}));
    window.sessionStorage.removeItem("user");
}