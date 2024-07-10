import axios from "axios"
import { TUser } from "@/interface"


const Server_Url = "http://localhost:3009"




export const userRegister = (user:TUser)=>{
    const url = `${Server_Url}/users/register `
    return axios.post(url,user)
}



export const userLogin = (user:TUser)=>{
    const url = `${Server_Url}/users/login`
    return axios.post(url,user)
}