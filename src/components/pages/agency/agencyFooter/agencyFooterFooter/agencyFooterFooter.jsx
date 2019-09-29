import React from 'react'
import facebookIcon from '../../images/icons/facebook.svg'
import instagramIcon from '../../images/icons/instagram.svg'
import linkedInIcon from '../../images/icons/linkedin.svg'
import twitterIcon from '../../images/icons/twitter.svg'
import pintererstIcon from '../../images/icons/pinterest.svg'

const AgencyFooterFooter = () =>{
    return(
        <div className='agencyFooterFooter'>
            <div className='agencyFooterFooterInfo'>
                <span>&copy;</span> abz.agency specially for the test task
            </div>
            <div className='agencyFooterFooterIcons'>
                <img src={facebookIcon} alt=""/>
                <img src={linkedInIcon} alt=""/>
                <img src={instagramIcon} alt=""/>
                <img src={twitterIcon} alt=""/>
                <img src={pintererstIcon} alt=""/>
            </div>

        </div>
    )
}

export default AgencyFooterFooter