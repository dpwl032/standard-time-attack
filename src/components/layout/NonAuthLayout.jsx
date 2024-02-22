import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import { useNavigate } from "react-router-dom";

const NonAuthLayout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  if (token) {
    navigate("/");
    // alert("이미 로그인 상태입니다");
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
