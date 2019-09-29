import {instance} from "./instance";


export const authAPI ={
    login:(data)=>instance.post('auth/login',data),
    authMe:()=> instance.get('auth/me'),
    logOut:() => instance.delete('auth/login')
}