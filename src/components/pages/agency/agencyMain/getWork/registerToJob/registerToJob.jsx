import React from 'react';
import FormRegisterToJob from "./formRegisterToJob/formRegisterToJob";
import {connect} from "react-redux";
import {addFormData, addNewUser} from "../../../../../../redux/reducers/agencyReducer";
import {reset as resetForm} from 'redux-form';

const RegisterToJob = ({addFormData,resetForm,positions,addNewUser}) => {

    const onFormSubmit =(data)=>{
        let formData = new FormData()

        const  phone = data.phone.replace(/[-()\s]/g, '')
        formData.append('name',data.name)
        formData.append('email',data.email)
        formData.append('phone',phone)
        formData.append('position_id',data.position_id)
        formData.append('photo',data.photo)

        addFormData(formData)
        addNewUser(formData)
        resetForm('registerToJob')


    }

    return (
        <div id='agencySignUp' className='registerToJob'>
            <h2 className='registerToJobHeader'>Register to get a work</h2>
            <h4 className='registerToJobAttention'> Attention! After successful registration and alert, update the list of users in the block from the top</h4>
            <FormRegisterToJob
                positions={positions}
                onSubmit={onFormSubmit}

            />


        </div>
    );
}
const mapStateToProps = (state) => ({
    imageName:state.agency.formData,
    positions:state.agency.positions
})

export default connect(mapStateToProps,{addFormData,resetForm,addNewUser,})(RegisterToJob)