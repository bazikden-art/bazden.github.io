import React, {Component} from 'react';
import Users from "./users";
import {addUsers, followUser, isFollowed, isLoading,} from "../../../../../redux/reducers/userReducer";
import {connect} from "react-redux";
import {usersAPI} from "../../api/usersApi";

class UserContainer extends Component {

    componentDidMount() {
        this.getUserPage()

    }


    getUserPage = (page) => {
        const {addUsers, isLoading} = this.props
        isLoading(true)
        usersAPI.getUsers(this.props.count, page && page)
            .then(res => {
                isLoading(false)
                addUsers(res.data)
            })


    }

    onBtnClick = (id) => {
        this.props.followUser(id)
    }

    render() {
        return (
            <div>
                <Users
                    onBtnClick={this.onBtnClick}
                    getUsers={this.getUserPage}
                    pageCount={this.props.pageCount}
                    {...this.props}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        loading: state.usersPage.isLoading,
        totalCount: state.usersPage.totalCount,
        followed: state.usersPage.users && state.usersPage.users.followed,
        count: state.usersPage.count,
        pageCount: state.usersPage.pageCount
    }
}

const mapDispatchToProps = () => ({
    addUsers,
    isLoading,
    isFollowed,
    followUser
})

export default connect(mapStateToProps, mapDispatchToProps())(UserContainer)