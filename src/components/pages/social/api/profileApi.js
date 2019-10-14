import {instance} from './instance'


export const profileAPI = {
    getUserProfile:(id = 1069) =>{
        return instance.get(`profile/${id}`)
    }
}

