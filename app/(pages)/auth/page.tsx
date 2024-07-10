"use client"

import Login from "@/app/components/auth/Login";
import Register from "../../components/auth/Register";
import { useSelector } from "react-redux";
import { RootState } from "@/feature/store/store";

const { isLogin } = useSelector((state: RootState) => state.app);

const authPage = () => {
  return (
    <div>
      <div className={`${isLogin === false ? "flex" : "hidden"}`}>
        <Register />
      </div>
      <div className={`${isLogin === true ? "hidden" : "flex"}`}>
        <Login />
      </div>
    </div>
  );
};

export default authPage;
