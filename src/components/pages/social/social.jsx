import React, {Component} from 'react'
import LeftSide from "./LeftSide/leftSide";
import {Main} from "./Main/main";
import RightSide from "./RightSide/rightSide";
import {usersAPI} from "./api/usersApi";
import {connect} from "react-redux";
import {getFriendsThunk} from "../../../redux/reducers/frindsReducer";

 class Social extends Component{
    componentDidMount() {
        usersAPI.getUsers(10)
        this.props.getFriendsThunk()

    }

    render() {

        return(
            <div  className='social'>
                <LeftSide/>
                <Main/>
                <RightSide/>
            </div>
        )
    }


}

export default connect(null,{getFriendsThunk})(Social)