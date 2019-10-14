import {usersAPI} from "../../components/pages/social/api/usersApi";

const ADD_USERS = 'ADD_USERS'
const IS_LOADING = 'IS_LOADING'
const IS_FOLLOWED = 'IS_FOLLOWED'

let initialState = {
    users: null,
    totalCount: 0,
    isLoading: false,
    followed: false,
    count: 10,

}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state,
                users: action.users.items,
                totalCount: action.users.totalCount,
                pageCount: Math.ceil(action.users.totalCount / state.count)

            }

        case IS_LOADING:

            return {
                ...state,
                isLoading: action.loading
            }

        case IS_FOLLOWED:
            return {
                ...state,
                users:
                    state.users.map(user => {
                        if (user.id === action.id) {
                            return {
                                ...user, followed: !user.followed
                            }
                        }
                        return user
                    })

            }

        default:
            return state

    }
}

export const addUsers = (users) => ({type: ADD_USERS, users})

export const isLoading = (loading) => ({type: IS_LOADING, loading})

export const isFollowed = (id) => ({type: IS_FOLLOWED, id})

export const followUser = (id) => async dispatch =>{
    const followed = await usersAPI.getFollowed(id)
    followed.status === 200 &&
        followed.data? usersAPI.unfollowCurrentUser(id)
        :
        usersAPI.followCurrentUser(id)
    dispatch(isFollowed(id))


}