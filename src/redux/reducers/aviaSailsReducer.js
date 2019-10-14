import * as axios from "axios";

const SEARCH_ID = "SEARCH_ID"
const ADD_TICKETS = "ADD_TICKETS"
const FILTER_TICKETS = "FILTER_TICKETS"
const PAGE_FILTER_TICKETS = "PAGE_FILTER_TICKETS"

let initialState = {}

export const aviaSailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ID:
            return {
                ...state,
                searchId: action.id
            }

        case ADD_TICKETS:
            return {
                ...state,
                tickets: action.tickets
            }

        case FILTER_TICKETS:
            debugger
            if(action.count == null) return {...state,filteredTickets:null}
            return {
                ...state,
                filteredTickets: state.tickets.filter(f => f.segments.filter(e => e.stops.length === action.count).length === 2)


            }

        case PAGE_FILTER_TICKETS:
            return{
                ...state,
                filteredTickets:action.tickets
            }


        default:
            return state

    }
}

const searchId = (id) => ({type: SEARCH_ID, id})
const setTickets = (tickets) => ({type: ADD_TICKETS, tickets})

export const getTickets = () => async dispatch => {
    const res = await axios.get('https://front-test.beta.aviasales.ru/search')
    dispatch(searchId(res.data.searchId))

    const tickets = await axios.get('https://front-test.beta.aviasales.ru/tickets', {params: {searchId: res.data.searchId}})
    dispatch(setTickets(tickets.data.tickets))


}

export const filterTickets = (count) => ({type: FILTER_TICKETS, count})

export const pageFilterTickets = (tickets) =>({type: PAGE_FILTER_TICKETS,tickets})