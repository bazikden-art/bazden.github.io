import React from 'react';
import FormRegisterToJob from "./formRegisterToJob/formRegisterToJob";
import {connect} from "react-redux";
import {addFormData} from "../../../../../../redux/reducers/agencyReducer";
import {reset as resetForm} from 'redux-form';

const RegisterToJob = ({addFormData,resetForm,imageName}) => {

    const onFormSubmit =(formData)=>{

        console.log(formData)
        addFormData(formData)
        resetForm('registerToJob')

    }
    return (
        <div className='registerToJob'>
            <h2 className='registerToJobHeader'>Register to get a work</h2>
            <h4 className='registerToJobAttention'> Attention! After successful registration and alert, update the list of users in the block from the top</h4>
            <FormRegisterToJob
                onSubmit={onFormSubmit}
            />


        </div>
    );
}
const mapStateToProps = (state) => ({
    imageName:state.agency.formData
})

export default connect(mapStateToProps,{addFormData,resetForm})(RegisterToJob)