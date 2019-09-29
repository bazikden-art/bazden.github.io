import React, {Component} from 'react';
import {connect} from "react-redux";
import {AgencyHeader} from "./agencyHeader";
import {getAgencyUser} from "../../../../redux/reducers/agencyReducer";

class AgencyHeaderContainer extends Component {
    componentDidMount() {
        this.props.getAgencyUser()
    }

    render() {
        return (
            <div>
                <AgencyHeader {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user:state.agency.currentUser

})



export default connect(mapStateToProps,{getAgencyUser}) (AgencyHeaderContainer)