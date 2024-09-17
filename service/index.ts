import axios from "axios";
import { TUser } from "@/interface";
import { ICategories, TCategories } from "@/interface/categories";
import { IProducts , ITopProducts } from "@/interface/products";

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

// Categories 

export const getCategories = () => {
  const url = `${Server_Url}/categories/getAll`;
  return axiosJwt.get(url);
};


export const createCategories = (category: ICategories) => {
  const formData = new FormData();
  formData.append("userId", category._id);
  formData.append("categories", category.categories);
  formData.append("title", category.title);
  formData.append("photo", category.photo as File  );
  formData.append("description", category.description);
  
  const url = `${Server_Url}/categories/create`;
  return axios.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
};


export const deleteCategories = (userId: string, _id: string ) => {
  const url = `${Server_Url}/categories/delete`;
  return axios.delete(url, { data: { userId,  categoryId:_id } });
};



export const editCategories = (categoryId: string, category: TCategories) => {
  const formData = new FormData();
  formData.append("categoryId", categoryId);  
  formData.append("userId", category._id || "");  
  formData.append("categories", category.categories || "");
  formData.append("title", category.title|| "");
  if (category.photo) {
    formData.append("photo", category.photo);
  }
  formData.append("description", category.description || "");

  const url = `${Server_Url}/categories/edit`;
  return axios.put(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  });
};







// Products

export const getProducts = () => {
  const url = `${Server_Url}/products/getAll`;
  return axios.get(url);
}

export const createProducts = (products: IProducts) => {
  const url = `${Server_Url}/products/create`;
  return axios.post(url, products);
}



// Top Products

export const getTopProducts = () => {
  const url = `${Server_Url}/topProducts/getAll`;
  return axios.get(url);
}

export const createTopProducts = (product: ITopProducts) => {
  const url = `${Server_Url}/topProducts/create`;
  return axios.post(url, product);
}