import React, {Component} from 'react';
import {AgencyUser} from "./agencyUsers";
import {connect} from "react-redux";
import {getAgencyUsers} from "../../../../redux/reducers/agencyReducer";

class AgencyUsersContainer extends Component {
    componentDidMount() {
        this.props.getAgencyUsers(1, 10)
    }

    render() {
        const {users} = this.props
        return (

            <div className='AgencyUsersBlock'>
                <div className="AgencyUsers">
                    {
                        users && users.map( user =>(
                            <AgencyUser
                                key={user.id}
                                name={user.name}
                                email={user.email}
                                phone={user.phone}
                                position={user.position}
                                photo={user.photo}

                            />
                        ))
                    }
                </div>


            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.agency.users
})

export default connect(mapStateToProps, {getAgencyUsers})(AgencyUsersContainer)