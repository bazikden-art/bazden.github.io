import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

const AgencyHeaderMenu = () => {
    const [state,setState] = useState({mainPage:true,id:null})


    const onAgencyAboutClick = (id) => {

        setState({...state,id:id,mainPage:true})
        let elem = document.getElementById(id)
        if (elem) {
            window.scroll(0, 0)
            let coords = elem.getBoundingClientRect()
            window.scroll(coords.x, coords.y - 174)
        }

    }
    useEffect(()=>{
        state.mainPage && onAgencyAboutClick(state.id)
    },[state.mainPage,state.id])

    return (
        <menu  className='agency-header-menu'>
            <NavLink onClick={() => onAgencyAboutClick('agencyAbout')} className='agency-header-menu-item'
                     to='/agency/main/about'>About me </NavLink>
            <NavLink onClick={() => onAgencyAboutClick('agencyRelationships')} className='agency-header-menu-item'
                     to='/agency/main/relationships'>Relationships </NavLink>
            <NavLink onClick={() => onAgencyAboutClick('agencyRequirements')} className='agency-header-menu-item'
                     to='/agency/main/requirements'>Requirements </NavLink>
            <NavLink onClick={()=>setState({...state,mainPage:false})} className='agency-header-menu-item' to='/agency/users'>Users </NavLink>
            <NavLink onClick={() => onAgencyAboutClick('agencySignUp')} className='agency-header-menu-item'
                     to='/agency/main/signUp'>Sign Up</NavLink>
        </menu>
    );
}

export default AgencyHeaderMenu;

