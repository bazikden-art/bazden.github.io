import React from 'react'
import {beens_logo_dark, logo_black} from "../logo/logo";
import {NavLink} from "react-router-dom";

const Footer =()=>{
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-4">
                        <ul className="footer">
                            <li className="footer__item">
                                <NavLink to='/landing' >
                                    <img src={logo_black} alt="logo"/>
                                </NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink to={'/landing/coffeepage'}>Our coffee</NavLink>
                            </li>
                            <li className="footer__item">
                                <NavLink to={'/landing/itempage'}>For your pleasure</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer__logo'>

                    <img className="beanslogo" src={beens_logo_dark} alt="Beans logo"/>

                </div>

            </div>
        </footer>
    )
}

export default Footer