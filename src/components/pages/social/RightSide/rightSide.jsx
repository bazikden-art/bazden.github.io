import React from 'react'
import RightSideUser from "./RightSideUser/RightSideUser";
import {connect} from "react-redux";
import {addUsers} from "../../../../redux/reducers/userReducer";

 const RightSide = () =>{
     addUsers()
    return(
        <div className='right-side'>
            <h2>Who to Follow</h2>
            <RightSideUser/>
            <RightSideUser/>
            <RightSideUser/>
            <RightSideUser/>
            <RightSideUser/>

        </div>
    )
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps,{addUsers}) (RightSide)