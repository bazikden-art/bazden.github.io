import React, {Component} from 'react';
import Users from "./users";
import {addUsers, isFollowed, isLoading,} from "../../../../../redux/reducers/userReducer";
import {connect} from "react-redux";
import {usersAPI} from "../../api/usersApi";

class UserContainer extends Component {
    state = {
        pages: []
    }

    componentDidMount() {
       this.getUserPage()


    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevProps.pageCount !== this.props.pageCount) {

            const pages = []
            for (let i = 1; i <= this.props.pageCount; i++) {
                pages.push(i)
            }

            this.setState({
                pages: pages
            })
        }
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
        this.props.isFollowed(id)
    }

    render() {
        return (
            <div>
                <Users
                    onBtnClick={this.onBtnClick}
                    pages={this.state.pages}
                    getUsers={this.getUserPage}
                    {...this.props}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
    users: state.usersPage.users,
    loading: state.usersPage.isLoading,
    totalCount: state.usersPage.totalCount,
    followed: state.usersPage.users && state.usersPage.users.followed,
    count: state.usersPage.count,
    pageCount: state.usersPage.pageCount
}}

const mapDispatchToProps = () => ({
    addUsers,
    isLoading,
    isFollowed
})

export default connect(mapStateToProps, mapDispatchToProps())(UserContainer)