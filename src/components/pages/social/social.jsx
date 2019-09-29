import React from 'react'
import {LeftSide} from "./LeftSide/leftSide";
import {Main} from "./Main/main";
import RightSide from "./RightSide/rightSide";

export const Social = () =>{
    return(
        <div  className='social'>
            <LeftSide/>
            <Main/>
            <RightSide/>
        </div>
    )
}