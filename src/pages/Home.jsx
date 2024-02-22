import React from "react";

const Home = () => {
  const token = localStorage.getItem("accessToken");
  const nickname = localStorage.getItem("nickname");

  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>

      {/* 로그인 여부에 따라 조건부 렌더링 */}
      {/*내코드
      {!token ? <p>로그인을 해주세요.</p> : <p>안녕하세요, {nickname}!</p>}*/}

      {localStorage.getItem("accessToken") ? (
        <p>안녕하세요, {localStorage.getItem("nickname")}님!</p>
      ) : (
        <p>로그인을 해주세요.</p>
      )}
    </div>
  );
};

export default Home;
