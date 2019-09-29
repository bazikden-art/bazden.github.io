import React from 'react'
import {SocialChat} from "./socialChat"
import {SocialLinks} from "./socialLinks"
import {ProfileCard} from "./profileCard"

export const LeftSide = () => {
    return (
        <div className='left-side'>
            <div className="left-side-block">
                <ProfileCard/>
                <SocialLinks/>
                <SocialChat/>
            </div>
        </div>
    )
}