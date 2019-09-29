import React from 'react';
import {Field, reduxForm} from "redux-form";
import {userEmail, userImage, userName, userPhone, userPosition} from "./formContrlols";
import submit from './submitForm'
import {validate} from "./validators";

let FormRegisterToJob = (props) => {

    console.log(props)
    return (
        <form onSubmit={props.handleSubmit(submit)} className={' formRegisterToJob'} >
            <Field name='name'  component= {userName} />
            <Field name='email' component={userEmail}/>
            <Field name='phone'  component={userPhone}/>
            <Field name='position' component={userPosition} positions ={props.positions}/>
            <Field name='image'  component={userImage}/>

            <button className='registerToJobSignUp'>Sign Up</button>
            {props.error}
        </form>

    )
}

const FormRegisterToJobRedux = reduxForm({form:'registerToJob',validate})(FormRegisterToJob)

export default FormRegisterToJobRedux











