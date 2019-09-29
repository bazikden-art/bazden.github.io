import {agencyAPI} from "../../components/pages/agency/api/agencyAPI";

const IMG_FILE_NAME= "IMG_FILE_NAME"
const ADD_USERS = "ADD_USERS"
const GET_USER = "GET_USER"
const GET_POSITIONS ="GET_POSITIONS"

let initialState = {}

export const agencyReducer = (state = initialState,action) =>{

    switch (action.type) {
        case ADD_USERS:
            return{
                ...state,
                users:action.users
            }

        case GET_USER:
            return{
                ...state,
                currentUser:action.user
            }

        case GET_POSITIONS:
            return{
                ...state,
                positions:action.positions.positions
            }

        case IMG_FILE_NAME:

            return{
                ...state,
                formData:action.data
            }
        default: return state

    }
}

export const addFormData = (data) =>({type:IMG_FILE_NAME,data})

export const addAgencyUsers = (users) =>  ({type:ADD_USERS,users})

export const addAgencyUser = (user) => ({type:GET_USER,user})

export const addAgencyPositions = (positions) =>({type:GET_POSITIONS,positions})

export const getAgencyUsers =  (page,count) => async dispatch =>{
    const res =  await agencyAPI.getUsers(page,count)
    dispatch(addAgencyUsers(res.data.users))
}

export const getAgencyUser = () => async dispatch =>{
    const res = await agencyAPI.getUser()
    dispatch(addAgencyUser(res.data.user))
}

export const  getAgencyPositions = () => async dispatch =>{

    const res = await agencyAPI.getPositions()
    dispatch(addAgencyPositions(res.data))
}