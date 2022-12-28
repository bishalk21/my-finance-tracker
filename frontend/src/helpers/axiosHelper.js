import axios from "axios";

// rootURL
const rootURL = "http://localhost:8000";

// ENDPOINT
const userEndpoint = rootURL + "/api/v1/user";

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