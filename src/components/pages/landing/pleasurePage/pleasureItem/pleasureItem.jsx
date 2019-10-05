import React from 'react'
import {NavLink} from 'react-router-dom'

export const PleasureItem = ({pleasure, onChosenItem}) => {
    return (

        <div onClick={() => onChosenItem(pleasure.name)} className="shop__item">
            <NavLink style={{textDecoration: 'none', color: 'black'}} to='/landing/itempage'>
                <img
                    src={pleasure.url}
                    alt="coffee"/>
                <div className="shop__item-title">
                    {pleasure.name}
                </div>
                <div className="shop__item-price">{pleasure.price}</div>
            </NavLink>

        </div>
    )

}