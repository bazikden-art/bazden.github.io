import React, {Component} from 'react'
import logo from './images/Logo.png'
import CountRaces from "./countRaces";
import {TicketBlock} from "./ticketBlock";
import {connect} from "react-redux";
import {getTickets, pageFilterTickets} from "../../../redux/reducers/aviaSailsReducer";

class Aviasales  extends Component {
    state={}
    componentDidMount() {
        this.props.getTickets()

    }


    render() {

        return (
            <div className='aviasales'>
                <div className='aviasales-logo'>
                    <img src={logo} alt=""/>
                </div>
                <div className='aviasales-container'>
                    <CountRaces/>
                    <TicketBlock
                        tickets={this.props.tickets}
                        filteredTickets={this.props.filteredTickets}
                        pageFilterTickets={this.props.pageFilterTickets}
                    />
                </div>

            </div>
        )
    }


}

const mapStateToProps = state => ({
    tickets:state.aviaSails.tickets,
    filteredTickets:state.aviaSails.filteredTickets
})



export default connect(mapStateToProps,{getTickets,pageFilterTickets})(Aviasales)