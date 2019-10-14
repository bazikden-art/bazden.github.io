import React from 'react'
import {SocialChat} from "./socialChat"
import {SocialLinks} from "./socialLinks"
import {ProfileCard} from "./profileCard"
import {connect} from "react-redux";


const LeftSide = ({logined}) => {
    return (
        <div className='left-side'>
            <div className="left-side-block">
                <ProfileCard/>
                <SocialLinks logined = {logined}/>
                <SocialChat/>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
  logined:state.auth.logined
})

export default connect(mapStateToProps)(LeftSide)