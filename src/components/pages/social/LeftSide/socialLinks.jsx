import React from 'react'
import {NavLink} from "react-router-dom";

export const SocialLinks = ({logined}) => {
    return (
        <nav>
            <div className="social-links-block">
                <div className="social-links-logo">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2"
                        alt=""/>
                </div>
                <NavLink to='/social/profile' className='social-links'>Profile</NavLink>
            </div>

            <div className="social-links-block">
                <div className="social-links-logo">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2"
                        alt=""/>
                </div>
                <NavLink to='/social/messages' className='social-links'>Messages</NavLink>
            </div>

            <div className="social-links-block">
                <div className="social-links-logo">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2"
                        alt=""/>
                </div>
                <NavLink to='/social/users' className='social-links'>Users</NavLink>
            </div>

            <div className="social-links-block">
                <div className="social-links-logo">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2"
                        alt=""/>
                </div>
                <NavLink to='/social/friends' className='social-links'>Friends</NavLink>
            </div>

            <div className="social-links-block">
                <div className="social-links-logo">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2"
                        alt=""/>
                </div>
                <NavLink to='/social/video' className='social-links'>Video</NavLink>
            </div>

            <div className="social-links-block">
                <div className="social-links-logo">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2"
                        alt=""/>
                </div>
                <NavLink to='/social/settings' className='social-links'>Settings</NavLink>
            </div>
            <div className="social-links-block">
                <div className="social-links-logo">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2"
                        alt=""/>
                </div>
                <NavLink to='/social/login' className='social-links'>{logined?'Log Out':'Login'}</NavLink>
            </div>
        </nav>
    )
}