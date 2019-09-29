import React from 'react'
import {logo} from "../logo/logo";
import {NavLink} from "react-router-dom";

export const Header = () => {
    return(
        <header>
            <ul className="header">
                <li className="header__item">
                    <NavLink to='/landing'>
                        <img src={logo} alt = "logo"/>
                    </NavLink>
                </li>
                <li className="header__item">
                    <NavLink to={'/landing/coffeepage'}>Our coffee</NavLink>
                </li>
                <li className="header__item">
                    <NavLink to={'/landing/itempage'}>For your pleasure</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header