import axios from "axios";
import { authApi } from "./auth";

// 로그인이 필요한 api
// comments를 가져오기 위해서는 꼭 로그인 정보가 필요하다.

const commentsAxios = axios.create({
  //내 코드
  //baseURL: "https://localhost:3001/comments",
  baseURL: `${process.env.REACT_APP_API_URL}/comments/`,
  timeout: 1500,
});

commentsAxios.interceptors.request.use(
  async function (config) {
    await authApi.get("user");
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
  }
  //요구 사항에 없는 내용
  // function (error) {
  //   console.log("응답실패");
  //   return Promise.reject(error);
  // }
);

export default commentsAxios;
