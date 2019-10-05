import React from 'react'
import {NavLink} from 'react-router-dom'

export const CoffeeItem = ({coffee,onChosenItem}) =>{
    return(

        <div onClick={()=>onChosenItem(coffee.name,'coffee')} className="shop__item">
            <NavLink style={{textDecoration:'none',color:'black'}} to='/landing/itempage'>
                <img
                    src={coffee.url}
                    alt="coffee"/>
                <div className="shop__item-title">
                    {coffee.name}
                </div>
                <div className="shop__item-country">{coffee.country}</div>
                <div className="shop__item-price">{coffee.price}</div>
            </NavLink>

        </div>
    )

}