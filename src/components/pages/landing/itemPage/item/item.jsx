import React from 'react'
import {coffee_item} from "../../img/img";
import {beens_logo_dark} from "../../logo/logo";

export const Item = ({chosenItem}) => {
    console.log(chosenItem)
    return (

        <div className="row-about">

            <img  className="shop__girl"
                 src={chosenItem ? chosenItem.url : coffee_item} alt="coffee_item"/>

            <div className="col-lg-4">
                <div className="title">About it</div>
                <img className="beanslogo" src={beens_logo_dark} alt="Beans logo"/>
                <div className="shop__point">
                    {
                        !chosenItem ? <span>Country: 'Brazil'</span>
                            :
                            chosenItem.country && <span>Country: {chosenItem.country}</span>
                    }
                </div>
                <div className="shop__point">
                    <span>Description:</span>
                    {
                        chosenItem ?
                            chosenItem.description
                            :
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.`
                    }

                </div>
                <div className="shop__point">
                    <span>Price:</span>
                    <span className="shop__point-price">{chosenItem ? chosenItem.price : '16.99$'}</span>
                </div>
            </div>
        </div>
    )
}