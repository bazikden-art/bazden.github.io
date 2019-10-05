import React from 'react'
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";

const BestItem = ({title,image,price,onChosenItem}) => {

    return(
        <div onClick={()=>onChosenItem(title,'coffee')} className="best__item">
            <NavLink style={{textDecoration:'none',color:'black'}} to='/landing/itempage'>
                <img
                    src={image}
                    alt="coffee"/>
                <div className="best__item-title">
                    {title}
                </div>
                <div className="best__item-price">{price}$</div>
            </NavLink>

        </div>
    )
}

export default withRouter(BestItem)