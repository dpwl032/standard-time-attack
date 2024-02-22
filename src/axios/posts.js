import axios from "axios";

const postsAxios = axios.create({
  //내 코드
  //baseURL: "https://localhost:3001/posts",
  baseURL: `${process.env.REACT_APP_API_URL}/posts/`,
  timeout: 1500,
});

export default postsAxios;
