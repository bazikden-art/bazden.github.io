import React from 'react'
import GetQuaintedFirstBlock from "./getQuaintedFirstBlock/getQuaintedFirstBlock"
import GetQuaintedSecondBlock from "./getQuaintedSecondBlock/getQuaintedSecondBlock";


function GetQuainted() {
    return (
        <div className='get-quainted'>
            <GetQuaintedFirstBlock/>
            <GetQuaintedSecondBlock/>
        </div>
    );
}

export default GetQuainted;