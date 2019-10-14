import React, {Component} from 'react';
import {connect} from "react-redux";

import {getFriendsThunk, unfollowFriend} from "../../../../../redux/reducers/frindsReducer";
import {NavLink} from "react-router-dom";
import img from "../../images/avatar.png";


class FriendsContainer extends Component {
    componentDidMount() {

        this.props.getFriendsThunk()
    }



    onBtnClick = (id) => {
        console.log(id)
        this.props.unfollowFriend(id)
    }

    render() {
        const {friends} = this.props

        return (
            <div className='friends'>
                {
                    friends && friends.map(f => (
                        <div key={f.id} className='friends-block'>
                            <div className='friends-block-icon'>
                                <NavLink to={`profile/${f.id}`}><img src={f.photos.small ? f.photos.small : img}
                                                                     alt=""/></NavLink>
                                <button onClick={() => this.onBtnClick(f.id)} className='friends-block-icon-btn'>
                                    {f.followed ? 'Del Friend' : 'Add Friend'}
                                </button>
                            </div>

                            <div className='friends-block-info'>
                                <div className='friends-block-name'>{f.name}</div>

                            </div>
                        </div>
                    ))
                }
            </div>
        )


    }
}

const mapStateToprops = state => ({
    friends: state.friends.friends
})

export default connect(mapStateToprops, {getFriendsThunk,unfollowFriend})(FriendsContainer)

