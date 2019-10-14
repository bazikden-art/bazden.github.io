import {usersAPI} from "../../components/pages/social/api/usersApi";

const ADD_FRIENDS = "ADD_FRIENDS"
const NULL_FRINDS = "NULL_FRINDS"
const UNFOLLOW_FRIEND = "UNFOLLOW_FRIEND"

let initialState = {
    friends: []
}


export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIENDS:
            return {
                ...state,
                friends: [...state.friends, ...action.friends.filter(f => f.followed === true)]
            }

        case NULL_FRINDS:
            return {
                friends: []
            }

        case UNFOLLOW_FRIEND:
            return{

            }

        default:
            return state

    }
}

export const getFriends = (friends) => ({type: ADD_FRIENDS, friends})

export const nullFriends = () => ({type: NULL_FRINDS})

//export const unfollowFriend = (id) => ({type: UNFOLLOW_FRIEND, id})

export const getFriendsThunk = () => async dispatch => {
    let totalCount = await usersAPI.getUsers()
    let allPAges = Math.ceil(totalCount.data.totalCount / 100)
    dispatch(nullFriends())
    for (let i = 1; i <= allPAges; i++) {
        let users = await usersAPI.getUsers(100, i)
        dispatch(getFriends(users.data.items))
    }

}

export const unfollowFriend = (id) => dispatch => {
    usersAPI.unfollowCurrentUser(id)
        .then(dispatch(getFriendsThunk()))
        .catch(error => console.log(error))

}