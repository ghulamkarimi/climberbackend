import axios from "axios"


const Server_Url = "http://localhost:3009"




export const userRegister = ()=>{
    const url = `${Server_Url}/users/register `
    return axios.post(url)
}