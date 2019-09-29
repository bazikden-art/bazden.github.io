import {instance} from "./instance";

export const usersAPI ={
    getUsers:(count,page =1)=>instance.get(`users/?count=${count}&page=${page}`),

}