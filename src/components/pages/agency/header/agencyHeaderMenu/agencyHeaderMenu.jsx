import React from 'react';
import {NavLink} from "react-router-dom";

function AgencyHeaderMenu() {
    return (
        <menu className='agency-header-menu'>
            <NavLink className='agency-header-menu-item' to='/agency/aboutMe'>About me </NavLink>
            <NavLink className='agency-header-menu-item' to='/agency/relationships'>Relationships </NavLink>
            <NavLink className='agency-header-menu-item' to='/agency/requirements'>Requirements  </NavLink>
            <NavLink className='agency-header-menu-item' to='/agency/users'>Users  </NavLink>
            <NavLink className='agency-header-menu-item' to='/agency/signUp'>Sign Up</NavLink>
        </menu>
    );
}

export default AgencyHeaderMenu;

