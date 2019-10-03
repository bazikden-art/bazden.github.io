import React from 'react';
import {Field, reduxForm} from "redux-form";
import {userEmail, userImage, userName, userPhone, userPosition} from "./formContrlols";
import submit from './submitForm'
import {validate} from "./validators";
import {connect} from "react-redux";


let FormRegisterToJob = (props) => {
    const onBtnClick =()=>{
        animateBtn()
    }

    const animateBtn =()=>{
        let elem = document.getElementById('animated-btn')
        let width = 290,
            height = 40
        elem.style.background = '#ef6c00'
        elem.style.opacity = '0.9'
        elem.style.borderRadius = '7px'
        elem.style.color ='black'
        let timer =  setInterval(()=>{

            width = width-10
            height= height-1
            elem.style.width = width + 'px'
            elem.style.height = height + 'px'
            if(width<=200){
                clearInterval(timer)
                elem.style.backgroundColor ='rgb(215,215,215)'
                elem.style.color = '#8d8c8c'
            }
        },100)
    }

    return (
        <form onSubmit={props.handleSubmit} className={' formRegisterToJob'} >
            <Field name='name'  component= {userName} />
            <Field name='email' component={userEmail}/>
            <Field name='phone'  component={userPhone}/>
            <Field name='position_id' component={userPosition} positions ={props.positions}/>
            <Field name='photo'  component={userImage}/>

            <div style={{flexBasis:'100%',color:'red'}}>{props.error}</div>
            <button onClick={onBtnClick}  className='registerToJobSignUp'>
                <div style={{margin:'auto',zIndex:"-1"}} id='animated-btn'>Sign Up</div>
            </button>

        </form>

    )
}

const FormRegisterToJobRedux = reduxForm({form:'registerToJob'})(FormRegisterToJob)

export default connect() (FormRegisterToJobRedux)











