import React from 'react'
import {AgencyHeader} from "./header/agencyHeader";
import AgencyMain from "./agencyMain/agencyMain";
import AgencyFooter from "./agencyFooter/agencyFooter";

export const Agency = () =>{
    return (
        <div className='agency'>
            <div className='AgencyHeaderLayout'>
                <AgencyHeader/>
            </div>

           <AgencyMain/>
           <AgencyFooter/>
        </div>
    )
}