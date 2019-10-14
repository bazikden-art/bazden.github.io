import React from 'react'
import {connect} from "react-redux";
import {filterTickets} from "../../../redux/reducers/aviaSailsReducer";

 const CountRaces = (props) => {

    const onCheckBoxClick = (e) => (count)=> {
        let checkBoxes = document.querySelectorAll('.aviasales-checkbox')
        for (let i =0;i<checkBoxes.length;i++){
            checkBoxes[i].checked = false
        }
         props.filterTickets(count)
        //count == 0 && props.filterTickets(count)
         e.target.checked = true

    }
    return (
        <div className='aviasales-count-races'>
            <h3>Количество пересадок</h3>
            <div className='aviasales-count-races-block'>
                <input onChange={(e)=>onCheckBoxClick(e)(null)}  checked={true} className='aviasales-checkbox' id='all' type="checkbox"/>
                <label htmlFor="all">Все</label>
            </div>
            <div className='aviasales-count-races-block'>
                <input onChange={(e)=>onCheckBoxClick(e)(0)} className='aviasales-checkbox' id='without' type="checkbox"/>
                <label htmlFor="without">Без пересадок</label>
            </div>
            <div className='aviasales-count-races-block'>
                <input onChange={(e)=>onCheckBoxClick(e)(1)} className='aviasales-checkbox' id='one' type="checkbox"/>
                <label htmlFor="one">1 пересадка</label>
            </div>
            <div className='aviasales-count-races-block'>
                <input onChange={(e)=>onCheckBoxClick(e)(2)} className='aviasales-checkbox' id='two' type="checkbox"/>
                <label htmlFor="two">2 пересадки</label>
            </div>
            <div className='aviasales-count-races-block'>
                <input onChange={(e)=>onCheckBoxClick(e)(3)} className='aviasales-checkbox' id='three' type="checkbox"/>
                <label htmlFor="three">3 пересадки</label>
            </div>

        </div>
    )
}
export default connect(null,{filterTickets})(CountRaces)