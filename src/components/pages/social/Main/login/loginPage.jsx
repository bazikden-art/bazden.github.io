import React from 'react'
import {LoginReduxForm} from "../../../../forms/login/reduxForm";
import {authAPI} from "../../api/authApi";
import {loginUser, loginUserThunk, logOutUser, redirect} from "../../../../../redux/reducers/authReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router";



const LoginPage = (props) => {
    const onFormSubmit = formData => {

        props.loginUserThunk(formData)

    }

    const onLogOut = () => {
        authAPI.logOut()
            .then(res => {
                res.data.resultCode === 0 &&
                props.logOutUser()
            })
    }

    return (
        <div className='login-page'>
            {
                props.logined ?
                    <button onClick={onLogOut} className='logout'>Log Out</button>
                    :
                    <>
                        login
                        <LoginReduxForm onSubmit={onFormSubmit} serverError={props.error} {...props}/>
                    </>

            }
            {
                props.error && <div style={{margin:'10px auto',textAlign:'center',color:'red'}} className='loginPage-error'>{props.error}</div>
            }
            {/*{props.redirectValue && <Redirect to='profile'/>}*/}


        </div>
    )
}

const mapStateToProps = (state) => ({
    logined: state.auth.logined,
    error:state.auth.error,
    redirectValue:state.auth.redirect
})

const mapDispatchToProps = () => ({
    loginUser,
    logOutUser,
    loginUserThunk,
    redirect
})

export default connect(mapStateToProps, mapDispatchToProps())(withRouter(LoginPage))