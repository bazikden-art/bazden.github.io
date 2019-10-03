import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import menu from './hamburger-menu-icon-transparent-16.jpg'

export const Header = (props) =>{
    const [isOpen,setIsOpen] = useState(false)

    const onMenuToggle = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <div className='main-page-header'>
            <div className='logo'>
                <img src="https://searchandgo.elated-themes.com/wp-content/uploads/2016/02/logo-color.png" alt=""/>
            </div>

            <div className='header_menu_block'>
                <div className={`header_menu ${isOpen && 'showed'}`}>
                    <NavLink to='/social'>Social Network</NavLink>
                    <NavLink to='/landing'>Landing Page</NavLink>
                    <NavLink to='/video'>Video</NavLink>
                    <NavLink to='/agency/main'>abz.agency</NavLink>


                </div>
                <div className="loginMenu">
                    <NavLink className='logined'  to ='social/login'>{props.logined?  props.loginedUser:'Log In'}</NavLink>
                    <div className='headerMenuIcon' onClick={onMenuToggle}>
                        <img src={menu} alt=''/>
                    </div>
                </div>
            </div>



        </div>
    )
}