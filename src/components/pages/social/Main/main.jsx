import React from 'react'
import {Route} from "react-router";
import {ProfileContainer,Messages,FriendsContainer,VideoContainer,Settings,UserContainer,LoginPage} from './pages'


export const Main = () => {
    return (
        <div className='main-social'>
            <Route path='/social/profile/:userId?' render={() => <ProfileContainer/>}/>
            <Route path='/social/messages' render={() => <Messages/>}/>
            <Route path='/social/users/' render={() => <UserContainer/>}/>
            <Route path='/social/friends' render={() => <FriendsContainer/>}/>
            <Route path='/social/video' render={() => <VideoContainer/>}/>
            <Route path='/social/settings' render={() => <Settings/>}/>
            <Route path='/social/login' render={()=><LoginPage/>}/>
        </div>
    )
}
