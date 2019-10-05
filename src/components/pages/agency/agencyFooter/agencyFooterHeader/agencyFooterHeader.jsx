import React from 'react'
import logo from '../../images/logo/logo.svg'
import {withRouter} from "react-router";
import AgencyHeaderMenu from "../../header/agencyHeaderMenu/agencyHeaderMenu";


const AgencyFooterHeader = () =>{
    return(
        <div className='agencyFooterHeader'>
            <div className='agencyFooterHeaderLogo'>
                <img src={logo} alt=""/>
            </div>
            <AgencyHeaderMenu/>
            {/*<div className='agencyFooterHeaderMenu' >*/}
                {/*<NavLink className='agencyFooterHeaderMenuItem' to='/agency/main/about'>About me </NavLink>*/}
                {/*<NavLink className='agencyFooterHeaderMenuItem' to='/agency/main/relationships'>Relationships </NavLink>*/}
                {/*<NavLink className='agencyFooterHeaderMenuItem' to='/agency/main/requirements'>Requirements  </NavLink>*/}
                {/*<NavLink className='agencyFooterHeaderMenuItem' to='/agency/main/users'>Users  </NavLink>*/}
                {/*<NavLink className='agencyFooterHeaderMenuItem' to='/agency/main/signUp'>Sign Up</NavLink>*/}
            {/*</div>*/}
        </div>
    )
}

export default withRouter(AgencyFooterHeader)