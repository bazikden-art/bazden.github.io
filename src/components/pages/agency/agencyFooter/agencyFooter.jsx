import React from "react"
import AgencyFooterHeader from "./agencyFooterHeader/agencyFooterHeader";
import AgencyFooterMain from "./agencyFooterMain/agencyFooterMain";
import AgencyFooterFooter from "./agencyFooterFooter/agencyFooterFooter";

const AgencyFooter = () => {
    return (
        <div className='agencyFooter'>
            <div className='agencyFooterLayout'>
                <AgencyFooterHeader/>
                <AgencyFooterMain/>
                <AgencyFooterFooter/>
            </div>
        </div>
    )
}
export default AgencyFooter