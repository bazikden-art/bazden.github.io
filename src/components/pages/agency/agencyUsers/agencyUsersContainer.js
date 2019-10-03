import React, {Component} from 'react';
import {AgencyUser} from "./agencyUsers";
import {connect} from "react-redux";
import {getAgencyUsers} from "../../../../redux/reducers/agencyReducer";
import {withRouter} from "react-router";

class AgencyUsersContainer extends Component {
    componentDidMount() {
        this.props.getAgencyUsers(1, 10)
        window.scroll(0, 0)

    }

    onAgencyUsersBtn = () => {
        this.props.history.goBack()
    }

    onAgencyUsersPageBtn = (page) => {
        this.props.getAgencyUsers(page, 10)
    }

    lengthValidate = string => {
        let newString
        string.length > 20 ? (newString = string.slice(0, 21) + '...') : newString = string
        return newString


    }

    render() {
        const {users} = this.props
        let pagesCount = 0
        if (this.props.totalCount)
            pagesCount = Math.ceil(this.props.totalCount / 10)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (

            <div className='AgencyUsersBlock'>
                <div className='AgencyUsersPageBtns'>
                    {
                        pages.map(page => (
                                <button onClick={() => this.onAgencyUsersPageBtn(page)} key={'page' + page}
                                        className='AgencyUsersPageBtn'>{page}</button>
                            )
                        )
                    }
                </div>

                <div className="AgencyUsers">
                    {
                        users && users.map(user => (
                            <AgencyUser
                                key={user.id}
                                name={user.name}
                                email={this.lengthValidate(user.email)}
                                phone={user.phone}
                                position={user.position}
                                photo={user.photo}

                            />
                        ))
                    }
                </div>

                <button onClick={this.onAgencyUsersBtn} className='AgencyUsersBtn'>Back</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.agency.users,
    totalCount: state.agency.totalCount
})

export default connect(mapStateToProps, {getAgencyUsers})(withRouter(AgencyUsersContainer))