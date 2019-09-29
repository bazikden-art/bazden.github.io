import React from 'react'
import {Field, reduxForm} from "redux-form";
import {max, required} from "../validator";
import {Input} from "./formControl";

const maxLength = max(20)

const Form = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type='text' component={Input} name='email'
                       placeholder="Email"  validate={[required, maxLength]} />

            </div>
            <div>
                <Field type='text' component={Input} name='password'
                       validate={[required, maxLength]} placeholder='password'/>

            </div>
            <div>
                <Field className='checkbox' type='checkbox' component='input' name='rememberMe'
                />
                <span>remember me</span>
            </div>
            <button>LogIn</button>

        </form>
    )
}


export const LoginReduxForm = reduxForm({form: 'login'})(Form)



