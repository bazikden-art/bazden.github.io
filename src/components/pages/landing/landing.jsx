import React from 'react'
import Main from "./main/main";
import {Route} from "react-router";
import CoffeePage from "./coffeePage/coffePage";
import ItemPage from "./itemPage/itemPage";


export const Landing = () => {
    return (
        <div className='landing'>
            <Route path='/landing' exact render={()=><Main/>}/>
            <Route path='/landing/coffeePage' render={()=><CoffeePage/>}/>
            <Route path='/landing/itempage' render={()=><ItemPage/>}/>


        </div>
    )
}