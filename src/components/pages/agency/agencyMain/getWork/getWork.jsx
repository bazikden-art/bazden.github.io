import React from 'react';
import CheerfulUsers from "./cheerfulUsers/cheerfulUsers";
import RegisterToJob from "./registerToJob/registerToJob";

function GetWork(props) {
    return (
        <div className='getWork'>
            <CheerfulUsers{...props}/>
            <RegisterToJob{...props}/>
        </div>
    );
}

export default GetWork;