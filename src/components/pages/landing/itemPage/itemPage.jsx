import React from 'react'
import Footer from "../footer/footer"
import Banner from "../header/banner"
import {Item} from "./item/item";


export const ItemPage = ({chosenItem}) => {
    window.scroll(0,0)
    return (
        <div className='item-page'>
            <Banner/>
            <section className="shop">
                <div className="container">

                        <Item chosenItem={chosenItem}/>

                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default ItemPage