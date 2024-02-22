import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navigation from "../Navigation";

const AuthLayout = () => {
  //정답코드
  //const token = localStorage.getItem("accessToken") ? true : false;

  //내코드
  const token = localStorage.getItem("accessToken");
  if (!token) {
    alert("로그인 먼저 해주세요!");
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <h1>Auth Layout</h1>
      <p>반드시 로그인이 되어있어야 하는 페이지입니다.</p>
      <Navigation />
      <main>
        {" "}
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
