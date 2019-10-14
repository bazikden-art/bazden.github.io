import {combineReducers} from "redux";
import {userReducer} from './userReducer'
import {reducer as formReducer} from "redux-form";
import {ProfileReducer} from "./profileReducer";
import {authReducer} from "./authReducer";
import {agencyReducer} from "./agencyReducer";
import {friendsReducer} from "./frindsReducer";
import {aviaSailsReducer} from "./aviaSailsReducer";


export default combineReducers({
    usersPage:userReducer,
    profilePage:ProfileReducer,
    auth:authReducer,
    form: formReducer,
    agency:agencyReducer,
    friends:friendsReducer,
    aviaSails:aviaSailsReducer
})