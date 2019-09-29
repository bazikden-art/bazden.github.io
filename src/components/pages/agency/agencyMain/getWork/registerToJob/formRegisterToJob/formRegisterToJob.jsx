import React from 'react';
import {Field, reduxForm} from "redux-form";
import {userEmail, userImage, userName, userPhone, userPosition} from "./formContrlols";
import submit from './submitForm'

let FormRegisterToJob = (props) => {


    return (
        <form onSubmit={props.handleSubmit} className={' formRegisterToJob'} >
            <Field name='name'  component= {userName}/>
            <Field name='email' component={userEmail}/>
            <Field name='phone'  component={userPhone}/>
            <Field name='position' component={userPosition}/>
            <Field name='image'  component={userImage}/>

            <button className='registerToJobSignUp'>Sign Up</button>
        </form>
    )
}

const FormRegisterToJobRedux = reduxForm({form:'registerToJob'})(FormRegisterToJob)

export default FormRegisterToJobRedux











