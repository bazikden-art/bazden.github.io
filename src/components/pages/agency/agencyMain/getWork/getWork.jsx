import React from 'react';
import CheerfulUsers from "./cheerfulUsers/cheerfulUsers";
import RegisterToJob from "./registerToJob/registerToJob";

function GetWork() {
    return (
        <div className='getWork'>
            <CheerfulUsers/>
            <RegisterToJob/>
        </div>
    );
}

export default GetWork;