import axios from "axios";

const API = axios.create({
  baseURL: "https://woodnest-1.onrender.com/api",
});

export default API;
