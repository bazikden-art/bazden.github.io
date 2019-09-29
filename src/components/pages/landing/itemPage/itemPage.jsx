import React from 'react'
import {beens_logo_dark} from '../logo/logo'
import {coffee_item} from '../img/img'
import Footer from "../footer/footer"
import Banner from "../header/banner"

export const ItemPage =()=>{
    return(
        <div className='item-page'>
           <Banner/>
            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 offset-1">
                            <img className="shop__girl" src={coffee_item} alt="coffee_item"/>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About it</div>
                            <img className="beanslogo" src={beens_logo_dark} alt="Beans logo"/>
                                <div className="shop__point">
                                    <span>Country:</span>
                                    Brazil
                                </div>
                                <div className="shop__point">
                                    <span>Description:</span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat.
                                </div>
                                <div className="shop__point">
                                    <span>Price:</span>
                                    <span className="shop__point-price">16.99$</span>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default ItemPage