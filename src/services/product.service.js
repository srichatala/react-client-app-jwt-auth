import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:60958/api/product/";

const getProducts = async () => {
    return await axios
    .get(API_URL + "products",{ headers: authHeader() })
    .then((response) => {
      return response.data;
    }).catch((error)=>{
        console.log(error);
    })
};


export {getProducts};
