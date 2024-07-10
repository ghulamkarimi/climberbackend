"use client";

import { Provider } from "react-redux";
import store from "./store/store";
import { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface IReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider = ({ children }: IReduxProviderProps) => {
  return (
    <Provider store={store}>
      {children}
      <ToastContainer />
    </Provider>
  );
};

export default ReduxProvider;
