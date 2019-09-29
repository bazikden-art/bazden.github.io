import React from 'react'
import Assignment from "./assignment/assignment";
import GetQuainted from "./getQuainted/getQuainted";
import Requirements from "./requirements/requirements";
import GetWork from "./getWork/getWork";

function AgencyMain() {
    return (
        <div>
            <Assignment/>
            <GetQuainted/>
            <Requirements/>
            <GetWork/>
        </div>
    )
}

export default AgencyMain;