const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

const initialState = {
    logined: false,
    loginedUser: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                logined: true,
                loginedUser: action.name

            }

        case LOGOUT:
            return {
                ...state,
                logined: false,
                loginedUser: null

            }
        default:
            return state
    }

}


export const loginUser = (name) => ({type: LOGIN, name})

export const logOutUser = () => ({type: LOGOUT})