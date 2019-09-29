import React, {useState} from 'react'
import logo from '../images/logo/logo.svg'
import userIcon from '../images/imgs/user-superstar-2x.jpg'
import signOut from '../images/icons/sign-out.svg'
import AgencyHeaderMenu from "./agencyHeaderMenu/agencyHeaderMenu";
import menuIcon from '../images/icons/line-menu.svg'

export const AgencyHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const onMenuToggle = () => {

        setIsOpen(!isOpen)
        console.log('state',isOpen)
    }


    return (
        <div className='agency-header'>
            <img src={logo} alt=""/>
            <div className={`AgencyHeaderMenuLogin ${isOpen?' showed':''}`}>
                <AgencyHeaderMenu/>
                <div className='agency-login'>
                    <div className='agency-user-info'>
                        <div className='agency-user-name'>
                            Superstar
                        </div>
                        <div className='agency-user-email'>
                            Superstar@gmail.com
                        </div>
                    </div>
                    <div className='agency-login-icons'>
                        <img className='agency-user-icon' src={userIcon} alt=""/>
                        <img className='agency-sign-out' src={signOut} alt=""/>
                    </div>
                </div>
            </div>
            <div onClick={onMenuToggle} className='AgencyHeaderMenuIcon'>
                <img src={menuIcon} alt=""/>
            </div>
        </div>
    )
}