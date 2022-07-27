import axios from "axios";
const rootUrl = "http://localhost:8000";
const UserP = rootUrl + "/api/v1/user/";
const transactionEP = rootUrl + "/api/v1/transaction";

export const postNewUser = async (user) => {
  try {
    const response = await axios.post(UserP, user);
    // console.log(response);
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
    // console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// transaction api
export const postTransaction = async (obj) => {
  try {
    const response = await axios.post(transactionEP, obj); // post to transaction endpoint
    // console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// get all transactions
export const getTransactions = async () => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userId = user._id;
    const response = await axios.get(transactionEP, {
      headers: {
        authorization: userId,
      },
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

// delete transaction
export const deleteTransaction = async (_id) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const userId = user._id;
    const response = await axios.delete(transactionEP + "/" + _id, {
      headers: {
        authorization: userId,
      },
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
