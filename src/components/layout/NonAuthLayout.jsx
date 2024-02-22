import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Navigation from "../Navigation";

const NonAuthLayout = () => {
  //정답코드
  //const token  = localStorage.getItem("accessToken") ? true : false;

  //내코드
  const token = localStorage.getItem("accessToken");
  if (token) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <h1>Non Auth Layout</h1>
      <p>로그인이 반드시 안되어있어야 하는 페이지</p>
      <Navigation />
      <main>
        {" "}
        <Outlet />
      </main>
    </div>
  );
};

export default NonAuthLayout;
