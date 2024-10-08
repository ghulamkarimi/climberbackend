"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/feature/store/store";
import Image from "next/image";
import Register from "@/src/app/[locale]/components/auth/Register";
import Login from "@/src/app/[locale]/components/auth/Login";

const AuthPage = () => {
  const { isLogin } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  return (
    <div className="w-full lg:grid lg:grid-cols-12">
      <div
        className="hidden lg:flex lg:col-span-6 relative"
        style={{ width: "100%", height: "100vh" }}
      >
        <img
          src="/registerBildOne.jpg"
          className="object-cover w-full h-full"
          alt="register Photo"
        />
      </div>
      <div className="   lg:col-span-6">
        <div
          className={`${
            isLogin === false
              ? "flex transition duration-300"
              : "hidden transition duration-300"
          }`}
        >
          <Register />
        </div>
        <div
          className={`${
            isLogin === true
              ? "flex transition duration-300"
              : "hidden transition duration-300"
          }`}
        >
          <Login />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
