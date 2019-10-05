import {agencyAPI} from "../../components/pages/agency/api/agencyAPI";
import {reset as resetForm} from 'redux-form';

const IMG_FILE_NAME= "IMG_FILE_NAME"
const ADD_USERS = "ADD_USERS"
const GET_USER = "GET_USER"
const GET_POSITIONS ="GET_POSITIONS"
const ADD_USER = "ADD_USER"
const ADD_RESULT = "ADD_RESULT"

let initialState = {}

export const agencyReducer = (state = initialState,action) =>{

    switch (action.type) {
        case ADD_USERS:
            return{
                ...state,
                users:action.users.users,
                totalCount:action.users.total_users,
                count:action.users.count
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

        case ADD_RESULT:
            return{
                ...state,
                result: action.result
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

export const addUser = (user) =>({type:ADD_USER,user})

export const addAgencyRegistrationResult = result =>({type:ADD_RESULT,result})

export const getAgencyUsers =  (page,count) => async dispatch =>{
    const res =  await agencyAPI.getUsers(page,count)
    dispatch(addAgencyUsers(res.data))
}

export const getAgencyUser = (id) => async dispatch =>{
    const res = await agencyAPI.getUser(id)
    dispatch(addAgencyUser(res.data.user))
}

export const  getAgencyPositions = () => async dispatch =>{

    const res = await agencyAPI.getPositions()
    dispatch(addAgencyPositions(res.data))
}

export const addNewUser=(formData)=>dispatch=>{

    agencyAPI.getToken()
        .then(res =>{
            if(res.status && res.data.success) {
                agencyAPI.addNewUser(formData,res.data.token)
                    .then(response => {
                        if (response.data.success){
                            console.log(response)
                            dispatch(getAgencyUsers())
                            dispatch(getAgencyUser(response.data.user_id))
                            dispatch(addAgencyRegistrationResult(response.data))

                            dispatch(resetForm('registerToJob'))
                        }

                    })
                    .catch(error => {
                        dispatch(addAgencyRegistrationResult(error.response.data))
                    })
            }


        } )
        .catch(error => {
            console.log(error)
        })
}