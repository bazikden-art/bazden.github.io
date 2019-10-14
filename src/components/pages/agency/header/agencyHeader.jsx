import React, {useState} from 'react'
import logo from '../images/logo/logo.svg'
import userIcon from '../images/imgs/user-superstar-2x.jpg'
import signOut from '../images/icons/sign-out.svg'
import AgencyHeaderMenu from "./agencyHeaderMenu/agencyHeaderMenu";
import menuIcon from '../images/icons/line-menu.svg'

export const AgencyHeader = ({user}) => {
    const [isOpen, setIsOpen] = useState(false)
    const onMenuToggle = () => {
        setIsOpen(!isOpen)
    }
    const onMouseLeave = () =>{
        console.log('leave')
        setIsOpen(false)
    }


    return (
        <div className='agency-header' onMouseOut={onMouseLeave} >
            <img src={logo} alt=""/>
            <div  className={`AgencyHeaderMenuLogin ${isOpen?' showed':''}`}>
                <AgencyHeaderMenu onMouseLeave={onMouseLeave}/>
                <div className='agency-login'>
                    <div className='agency-user-info'>
                        <div className='agency-user-name'>
                            {user ? user.name :'Superstar'}
                        </div>
                        <div className='agency-user-email'>
                            {user ? user.email :"Superstar@gmail.com"}
                        </div>
                    </div>
                    <div className='agency-login-icons'>
                        <img className='agency-user-icon' src={user ?user.photo:userIcon} alt=""/>
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