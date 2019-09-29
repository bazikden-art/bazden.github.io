const ADD_POST = "ADD_POST"
const GET_USER_PROFILE = "GET_USER_PROFILE"

let initialState = {
    posts:[]
}

export const ProfileReducer = (state = initialState,action) =>{

    switch (action.type) {

        case ADD_POST:
            debugger
            return {
                ...state,
                posts:[...state.posts,{id:1,name:"Denis",likes:5,post:action.post}]
            }

        case GET_USER_PROFILE:
            return{
                ...state,
                userProfile:action.profile
            }

        default: return state
    }

}



export const getUserProfile = (profile) =>({type:GET_USER_PROFILE,profile})

export const addPost =(post)=> ({type:ADD_POST,post})