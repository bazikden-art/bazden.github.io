import React from 'react'
import {LoginReduxForm} from "../../../../forms/login/reduxForm";
import {authAPI} from "../../api/authApi";
import {loginUser, logOutUser} from "../../../../../redux/reducers/authReducer";
import {connect} from "react-redux";


const LoginPage = (props) => {
    const onFormSubmit = formData =>{
        console.log(formData)
        authAPI.login(formData)
            .then(res => {
                console.log('login',res)
                if(res.data.resultCode === 0){
                    authAPI.authMe()
                        .then(res => props.loginUser(res.data.data.login))
                }

            })



    }

    const onLogOut = () => {
        authAPI.logOut()
            .then(res =>{
                res.data.resultCode === 0 &&
                    props.logOutUser()
            })
    }

    return(
        <div className='login-page'>
            {
                props.logined?
                    <button onClick={onLogOut} className='logout'>Log Out</button>
                :  <>
                        login
                        <LoginReduxForm  onSubmit={onFormSubmit} {...props}/>
                    </>
            }

        </div>
    )
}

const mapStateToProps = (state) =>({
    logined:state.auth.logined
})

const mapDispatchToProps = () =>({
    loginUser,
    logOutUser
})

export default connect(mapStateToProps,mapDispatchToProps()) (LoginPage)