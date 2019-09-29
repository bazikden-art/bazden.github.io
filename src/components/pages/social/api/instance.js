import * as axios from "axios";


export const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        "API-KEY":"45327fca-446a-477f-ac5c-a78e3c365700"
    }
})