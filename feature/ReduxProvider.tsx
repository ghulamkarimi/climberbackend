"use client";

import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";

interface IReduxProviderProps {
  children: ReactNode;
}
axios.defaults.withCredentials = true;
const ReduxProvider = ({ children }: IReduxProviderProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
