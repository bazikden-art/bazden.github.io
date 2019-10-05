import React from 'react'
import Main from "./main/main";
import {Route} from "react-router";
import CoffeePage from "./coffeePage/coffeePage";
import {PleasurePage} from "./pleasurePage/pleasurePage";
import ItemPage from "./itemPage/itemPage";


export const Landing = ({data,onChosenItem,chosenItem}) => {

    return (
        <div className='landing'>
            <Route path='/landing' exact render={()=><Main onChosenItem={onChosenItem} bestsellers={data.bestsellers}/>}/>
            <Route path='/landing/coffeePage' render={()=><CoffeePage onChosenItem={onChosenItem} coffee ={data.coffee}/>}/>
            <Route path='/landing/itempage' render={()=><ItemPage chosenItem={chosenItem} coffee ={data.coffee}/>}/>
            <Route path='/landing/pleasure' render={()=><PleasurePage onChosenItem={onChosenItem} pleasure ={data.goods}/>}/>


        </div>
    )
}