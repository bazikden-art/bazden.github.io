import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import menu from './hamburger-menu-icon-transparent-16.jpg'

export const Header = (props) =>{
    const [isOpen,setIsOpen] = useState(false)

    const onMenuToggle = () =>{
        setIsOpen(!isOpen)
    }
    const onMouseLeave = () =>{

        console.log('leave')
        document.documentElement.clientWidth <= 768 && setIsOpen(false)
    }

    return(
        <div className='main-page-header'>
            <div className='logo'>
                <img src="https://searchandgo.elated-themes.com/wp-content/uploads/2016/02/logo-color.png" alt=""/>
            </div>

            <div className='header_menu_block'>
                <div onMouseLeave={onMouseLeave}  className={`header_menu ${isOpen && 'showed'}`}>
                    <NavLink to='/social'>Social Network</NavLink>
                    <NavLink to='/landing'>Landing Page</NavLink>
                    <NavLink to='/aviasales'>AviaSales</NavLink>
                    <NavLink to='/agency/main'>abz.agency</NavLink>


                </div>
                <div className="loginMenu">
                    <div className='loginedUser-block'>
                        {
                            props.logined && <div className='header-logineduser-photo'>
                                <img src={props.loginedUserData && props.loginedUserData.photos.small? props.loginedUserData.photos.small:'./avatar.png'} alt=""/>
                            </div>
                        }
                        <NavLink className='logined'  to ='login'>{props.logined?  props.loginedUser.login:'Log In'}</NavLink>
                    </div>


                    <div className='headerMenuIcon' onClick={onMenuToggle}>
                        <img src={menu} alt=''/>
                    </div>
                </div>
            </div>



        </div>
    )
}