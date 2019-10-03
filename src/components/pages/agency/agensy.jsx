import React from 'react'
import AgencyMain from "./agencyMain/agencyMain";
import AgencyFooter from "./agencyFooter/agencyFooter";
import AgencyHeaderContainer from "./header/agencyHeaderContainer";
import {Route} from "react-router";
import AgencyUsersContainer from "./agencyUsers/agencyUsersContainer";
import {LayOut} from "./common/layout";

export const Agency = () => {
    return (
        <div className='agency'>
            <div className='AgencyHeaderLayout'>
                <AgencyHeaderContainer/>
            </div>
            <div className="AgencyLayout">
                <Route path='/agency/main' render={() => <AgencyMain/>}/>
                <Route path='/agency/users' render={() => <LayOut><AgencyUsersContainer/></LayOut>}/>
            </div>


            <AgencyFooter/>
        </div>
    )
}