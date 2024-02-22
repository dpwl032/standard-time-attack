import axios from "axios";

//timetest01

export const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
  headers: { "Content-Type": "application/json" },
});

authApi.interceptors.request.use(
  function (config) {
    console.log("요청성공");
    return config;
  },
  function (error) {
    console.log("요청실패");
    return Promise.reject("인증이 필요합니다.");
  }
);
