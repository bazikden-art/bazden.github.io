import React from 'react'
import HeaderContainer from "./components/header/headerConteiner"
import {Route} from "react-router";
import Social from "./components/pages/social/social";
import Aviasales from "./components/pages/aviasales/aviasales";
import {Agency} from "./components/pages/agency/agensy";
import LandingContainer from "./components/pages/landing/landingContainer";


const App = () =>{
    return(
        <div className='page-container'>
            <HeaderContainer/>
            <div  className='layout'>
                <Route path='/social' render={()=><Social/>}/>
                <Route path='/landing' render={()=><LandingContainer/>}/>
                <Route path='/aviasales' render={()=><Aviasales/>}/>
                <Route path='/agency' render={()=><Agency/>}/>
            </div>

        </div>
    )
}
export default App