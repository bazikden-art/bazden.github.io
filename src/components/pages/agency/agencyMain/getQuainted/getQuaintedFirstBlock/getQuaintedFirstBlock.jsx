import React from 'react'
import img from '../../../images/imgs/man-mobile.svg'
import {NavLink} from "react-router-dom"

function GetQuaintedFirstBlock() {
    return (
        <>

            <div id='agencyAbout' className='get-quainted-first-block'>
                <h2 className='headerH2Mobile'>Let's get ac quainted</h2>
                <div className='get-quainted-first-block-img'>
                    <img src={img} alt=""/>
                </div>

                <div className='get-quainted-first-block-info'>
                    <h2>Let's get ac quainted</h2>
                    <h3>I am cool frontend developer</h3>
                    <div className='get-quainted-first-block-info-text'>
                        <p>When real users have a slow experience on mobile, they're much less likely to find what they
                            are looking for or purchase from you in the future. For many sites this equates to a huge
                            missed opportunity, especially when more than half of visits are abandoned if a mobile page
                            takes over 3 seconds to load.</p>
                        <p>
                            Last week, Google Search and Ads teams announced two new speed initiatives to help improve
                            user-experience on the web.
                        </p>
                    </div>

                    <NavLink to='agency/signUp' className='get-quainted-first-block-info-signup'>Sign Up</NavLink>
                </div>

            </div>
        </>
    );
}

export default GetQuaintedFirstBlock;