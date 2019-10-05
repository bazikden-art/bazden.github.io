import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input, userImage, UserPhone, userPosition} from "./formControls";
import {connect} from "react-redux";


let FormRegisterToJob = ({handleSubmit, result, positions, filename}) => {

    const onBtnClick = () => {
        animateBtn()
    }

    const onResultClick = (e) => {
        e.target.style.display = 'none'
    }

    const onOkClick = (e) => {
        e.target.parentNode.style.display = 'none'
    }

    const animateBtn = () => {
        let elem = document.getElementById('animated-btn')
        let width = 290,
            height = 40
        elem.style.background = '#ef6c00'
        elem.style.opacity = '0.9'
        elem.style.borderRadius = '7px'
        elem.style.color = 'black'
        let timer = setInterval(() => {

            width = width - 10
            height = height - 1
            elem.style.width = width + 'px'
            elem.style.height = height + 'px'
            if (width <= 200) {
                clearInterval(timer)
                elem.style.backgroundColor = 'rgb(215,215,215)'
                elem.style.color = '#8d8c8c'
            }
        }, 100)
    }
    const error = result && !result.success
    console.log(result)
    return (


        <form onSubmit={handleSubmit} className={' formRegisterToJob'}>
            <Field name='name' type='text' error={error && result.fails.name && result.fails.name[0]}
                   component={Input}/>


            <Field name='email' type='email' error={error && result.fails.email && result.fails.email[0]}
                   component={Input}/>


            <Field name='phone' type='tel' error={error && result.fails.phone && result.fails.phone[0]}
                   mask="+38 ( 099 \) 999 99 99" component={UserPhone}/>


            <Field name='position_id' error={error && result.fails.position_id && result.fails.position_id[0]}
                   component={userPosition} positions={positions}/>


            <Field name='photo' error={error && result.fails.photo && result.fails.photo[0]} filename={filename}
                   component={userImage}/>

            {
                result && result.success && result.message &&
                <div onClick={onResultClick} className='formRegisterToJobResult'>
                    <div className="formRegisterToJobResultLayer">
                        Congratulations !!!
                        <div>
                            <p style={{margin: '20px 20px 20px 0'}}>
                                You have successfully pass the registration
                            </p>


                        </div>
                        <div onClick={onOkClick} className='formRegisterToJobResultOK'>ok</div>
                    </div>

                </div>
            }

            <button onClick={onBtnClick} className='registerToJobSignUp'>
                <div style={{margin: 'auto', zIndex: "-1"}} id='animated-btn'>Sign Up</div>
            </button>

        </form>

    )
}

const FormRegisterToJobRedux = reduxForm({form: 'registerToJob'})(FormRegisterToJob)
const mapStateToProps = state => ({
    result: state.agency.result,
    filename: state.form.registerToJob
})

export default connect(mapStateToProps)(FormRegisterToJobRedux)











