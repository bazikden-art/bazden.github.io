import React from 'react'
import logo from '../../images/logo/logo.svg'
import {NavLink} from "react-router-dom";

const AgencyFooterHeader = () =>{
    return(
        <div className='agencyFooterHeader'>
            <div className='agencyFooterHeaderLogo'>
                <img src={logo} alt=""/>
            </div>
            <div className='agencyFooterHeaderMenu' >
                <NavLink className='agencyFooterHeaderMenuItem' to='/agency/aboutMe'>About me </NavLink>
                <NavLink className='agencyFooterHeaderMenuItem' to='/agency/relationships'>Relationships </NavLink>
                <NavLink className='agencyFooterHeaderMenuItem' to='/agency/requirements'>Requirements  </NavLink>
                <NavLink className='agencyFooterHeaderMenuItem' to='/agency/users'>Users  </NavLink>
                <NavLink className='agencyFooterHeaderMenuItem' to='/agency/signUp'>Sign Up</NavLink>
            </div>
        </div>
    )
}

export default AgencyFooterHeader