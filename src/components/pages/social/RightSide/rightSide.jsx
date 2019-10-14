import React from 'react'
import RightSideUser from "./RightSideUser/RightSideUser";
import {connect} from "react-redux";
import {addUsers} from "../../../../redux/reducers/userReducer";

 const RightSide = ({users}) =>{

    return(
        <div className='right-side'>

            <div className='right-side-user-container'>
                <h2 className='right-side-title'>Who to Follow</h2>
                {
                    users && users.map(user =>(
                        <RightSideUser  key={user.id}user={user}/>
                    ))
                }
                <RightSideUser/>
                <RightSideUser/>
                <RightSideUser/>
                <RightSideUser/>
                <RightSideUser/>
            </div>



        </div>
    )
}
const mapStateToProps = state => ({
    users:state.usersPage.users
})
export default connect(mapStateToProps,{addUsers}) (RightSide)