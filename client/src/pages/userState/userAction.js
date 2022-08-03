import { toast } from "react-toastify";
import { loginUser } from "../../helpers/axiosHelper";
import { setUser } from "./userSlice";

export const loginAction = (obj) => async (dispatch) => {
  const { status, message, user } = await loginUser(obj);

  toast[status](message);
  console.log(status, message, user);
  if (status === "success") {
    window.sessionStorage.setItem("user", JSON.stringify(user));
    dispatch(setUser(user));
  }
};

export const logoutAction = () => (dispatch) => {
  dispatch(setUser({}));
  window.sessionStorage.removeItem("user");
};
