import axios from "axios";
import { authApi } from "./auth";

const commentsAxios = axios.create({
  baseURL: "https://localhost:3001/comments",
  timeout: 1500,
});

commentsAxios.interceptors.request.use(
  function (config) {
    console.log("요청성공");
    return config;
  },
  function (error) {
    console.log("요청실패");
    return Promise.reject(error);
  }
);

commentsAxios.interceptors.response.use(
  function (response) {
    console.log("응답성공");
    return response;
  },
  function (error) {
    console.log("응답실패");
    return Promise.reject(error);
  }
);

export default commentsAxios;
