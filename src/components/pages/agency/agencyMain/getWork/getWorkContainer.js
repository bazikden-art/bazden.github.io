import React, {Component} from 'react';
import GetWork from "./getWork";
import {connect} from "react-redux";
import {getAgencyPositions, getAgencyUsers} from "../../../../../redux/reducers/agencyReducer";

class GetWorkContainer extends Component {
    componentDidMount() {
        this.props.getAgencyUsers()
        this.props.getAgencyPositions()
    }

    render() {

        return (
            <div>
                <GetWork {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    users:state.agency.users
})

export default connect(mapStateToProps,{getAgencyUsers,getAgencyPositions})(GetWorkContainer)