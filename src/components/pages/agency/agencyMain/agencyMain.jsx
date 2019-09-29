import React from 'react'
import Assignment from "./assignment/assignment";
import GetQuainted from "./getQuainted/getQuainted";
import Requirements from "./requirements/requirements";
import GetWorkContainer from "./getWork/getWorkContainer";

function AgencyMain() {
    return (
        <div>
            <Assignment/>
            <GetQuainted/>
            <Requirements/>
            <GetWorkContainer/>
        </div>
    )
}

export default AgencyMain;