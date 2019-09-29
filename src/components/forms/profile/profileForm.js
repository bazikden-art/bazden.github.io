import React from 'react'
import {Field, reduxForm} from "redux-form";
import {max, required} from "../validator";
import {TextArea} from "../login/formControl";

const maxLength = max(20)

const Form = (props) =>{

    return(
        <form onSubmit={props.handleSubmit} className='post-message-container'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjyRYvuZhMSWJNX-lMIQxeLLAFi1ZP4a5i4SMvTHtHtszhAtzlg" alt=""/>
            <Field name="postMessage" id="post-message"
                validate={[required,maxLength]} component={TextArea}/>
            <div className="post-message-logo-block">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2" alt=""/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2" alt=""/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2" alt=""/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2" alt=""/>
            </div>
            <button className='post-message-btn'>Publish</button>

        </form>

    )
}


    const ProfileForm = reduxForm({form:'profile'})(Form)

export default ProfileForm