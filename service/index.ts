import axios from "axios";
import { TUser } from "@/interface";

const Server_Url = "http://localhost:3009";

export const axiosJwt = axios.create();
axiosJwt.interceptors.request.use;

export const userRegister = (user: TUser) => {
  const url = `${Server_Url}/users/register `;
  return axios.post(url, user);
};

export const userLogin = (user: TUser) => {
  const url = `${Server_Url}/users/login`;
  return axios.post(url, user);
};

export const refreshToken = () => {
  const url = `${Server_Url}/token`;
  return axios.get(url);
};

export const checkToken = () => {
  const url = `${Server_Url}/check-token`;
  return axios.get(url);
};
