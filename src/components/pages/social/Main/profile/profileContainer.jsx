import React, {Component} from 'react';
import {addPost, getUserProfile} from "../../../../../redux/reducers/profileReducer";
import Profile from "./profile";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {profileAPI} from "../../api/profileApi";

class ProfileContainer extends Component {
    componentDidMount() {
        const id = this.props.match.params.userId
        profileAPI.getUserProfile(id)
            .then(res => this.props.getUserProfile(res.data))
    }

    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = state => {

    return{
        posts: state.profilePage.posts,
        profile:state.profilePage.userProfile
    }
}

const mapDispatchToProps = () => ({
    addPost,
    getUserProfile
})

export default connect(mapStateToProps,mapDispatchToProps()) (withRouter(ProfileContainer))