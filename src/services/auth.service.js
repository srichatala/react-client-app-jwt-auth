import axios from "axios";

const API_URL = "http://localhost:60958/api/customer/";

const register = async (name, email, password) => {
  return await axios.post(API_URL + "registration", {
    email,
    password,
    name
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};

const login = async (username, password) => {
  return await axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
    // return axios
    // .get(API_URL + "customer",{ headers: authHeader() })
    // .then((response) => {
    //   return response.data;
    // });
    return JSON.parse(localStorage.getItem("user"));
};


export {register,login, logout, getCurrentUser};
