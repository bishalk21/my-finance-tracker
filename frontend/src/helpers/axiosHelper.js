import axios from "axios";

// rootURL
// const rootURL = "http://localhost:8000";

// production vs development version
const rootURL = process.env.NODE_ENV === "production" ? "" : "http://localhost:8000";

// ENDPOINT
const userEndpoint = rootURL + "/api/v1/user";
const transactionEndpoint = rootURL + "/api/v1/transaction";

// add new user
export const postNewUser = async (user) => {
    try {
        const response = await axios.post(userEndpoint, user);
        return response.data;
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        }
    }
}

// login new user
export const loginNewUser = async (user) => {
    try {
        const response = await axios.post(userEndpoint + "/login", user);
        return response.data;
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        }
    }
}

// ADD TRANSACTION
export const postNewTransaction = async (transaction) => {
    try {
                // get all transaction for the specific user based on their id
        const user = JSON.parse(sessionStorage.getItem("user"));
        const userId = user._id;
        const response = await axios.post(transactionEndpoint, transaction,  {
            headers: {
                authorization: userId,
            }
        });
        return response.data;
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        }
    }
}

// GET TRANSACTION
export const getTransaction = async () => {
    try {
        // get all transaction for the specific user based on their id
        const user = JSON.parse(sessionStorage.getItem("user"));
        const userId = user._id;
        const response = await axios.get(transactionEndpoint, {
            headers: {
                authorization: userId,
            }
        });
        return response.data;
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        }
    }
}

//DELETE TRANSACTION
export const deleteTransaction = async (_id) => {
    try {
        // get all transaction for the specific user based on their id
        const user = JSON.parse(sessionStorage.getItem("user"));
        const userId = user._id;
        const response = await axios.delete(transactionEndpoint + "/" + _id, {
            headers: {
                authorization: userId,
            }
        });
        // console.log(response.data);
        return response.data;
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        }
    }
}