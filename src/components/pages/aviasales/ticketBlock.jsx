import React, {useEffect, useState} from 'react'
import {TicketCard} from "./ticketCard";

export const TicketBlock = ({tickets,filteredTickets,pageFilterTickets}) => {
    const [showedtickets,setShowedTicketes] = useState(null)
    const [filtered,setFiltered] = useState(null)

    useEffect(
        ()=>{
        tickets && setShowedTicketes(tickets.slice(0,5).sort((a,b) =>a.price - b.price))
    },[tickets])

    const onFastBtnClick = (e) => (data) => {
        let elem = document.querySelectorAll('.aviasales-tickets-block-btn')
        for (let i = 0;i<elem.length;i++){

              elem[i].className = 'aviasales-tickets-block-btn'
        }
        let arr = new Array(...data)
        arr.sort((a,b) => Date.parse(a.segments.sort((a,b) => Date.parse(a.date) - Date.parse(b.date))[0].date) - Date.parse(b.segments.sort((a,b) => Date.parse(a.date) - Date.parse(b.date))[0].date))
        //debugger
        pageFilterTickets(arr)
        e.target.className += ' active'

    }

    const onCheapBtnClick = e => (data) =>{
        let elem = document.querySelectorAll('.aviasales-tickets-block-btn')
        for (let i = 0;i<elem.length;i++){
            elem[i].className = 'aviasales-tickets-block-btn'
        }
        let arr = new Array(...data)
        arr.sort((a,b) =>a.price - b.price)
        //debugger
        pageFilterTickets(arr)
        e.target.className += ' active'
    }

    console.log(showedtickets)

    return (
        <div className='aviasales-tickets-block'>
            <button onClick={(e)=>onCheapBtnClick(e)(filteredTickets? filteredTickets: showedtickets)} className='aviasales-tickets-block-btn active'>самый дешевый</button>
            <button onClick={(e)=>onFastBtnClick(e)(filteredTickets? filteredTickets: showedtickets)} className='aviasales-tickets-block-btn'>самый быстрый</button>
            {
                !filteredTickets?
                showedtickets && showedtickets.map((ticket,i) =>{
                    console.log(ticket)
                    return (

                 <TicketCard key={ticket.carrier + i + ticket.price + tickets.segments} ticket={ticket} />
                )})
:
                    filteredTickets.slice(0,5).map((ticket,i) =>{

                        return (

                            <TicketCard key={ticket.carrier + i + ticket.price} ticket={ticket}/>
                        )})





            }



        </div>
    )
}