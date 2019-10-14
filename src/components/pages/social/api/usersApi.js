import {instance} from "./instance";

export const usersAPI ={
    getUsers:(count,page =1)=>instance.get(`users/?count=${count}&page=${page}`),
    getFollowed:(id)=>instance(`follow/${id}`),
    followCurrentUser: (id) =>instance.post(`follow/${id}`),
    unfollowCurrentUser: (id) =>instance.delete(`follow/${id}`),

}