import axios from "axios";
const rootUrl = "http://localhost:8000";
const UserP = rootUrl + "/api/v1/user/";

export const postNewUser = async (user) => {
  try {
    const response = await axios.post(UserP, user);
    console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (obj) => {
  try {
    const response = await axios.post(UserP + "/login", obj);
    console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
