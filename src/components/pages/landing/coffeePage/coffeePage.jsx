import React, {useState} from 'react'
import {beens_logo_dark} from '../logo/logo'
import {coffee_girl} from '../img/img'
import Footer from "../footer/footer"
import Banner from "../header/banner"
import {CoffeeItem} from "./coffeeItem/coffeeItem";



const CoffeePage = ({coffee,onChosenItem})=>{
    let [filtered,setFiltered] = useState(null)


    const onSearchBtnClick = e =>{
        let filtered = coffee.filter(item =>item.country === e.target.innerHTML )
        setFiltered(filtered)
    }

    const onInputChange = e => {
        let filtered = coffee.filter(item => item.name.slice(0,e.target.value.length).toLowerCase() ===  e.target.value.toLowerCase() )
        setFiltered(filtered)
    }



    return(
        <div className='coffee-page'>
            <Banner/>
            <section className="shop">
                <div className="container">
                    <div className="row-about">
                        <div className="col-lg-4 ">
                            <img className="shop__girl" src={coffee_girl} alt="girl"/>
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About our beans</div>
                            <img className="beanslogo" src={beens_logo_dark} alt="Beans logo"/>
                                <div className="shop__text">
                                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>

                                        <p>
                                            {`Afraid at highly months do things on at. Situation recommend objection do
                                            intention
                                            so questions.
                                            As greatly removed calling pleased improve an. Last ask him cold feel
                                            met spot shy want. Children me laughing we prospect answered followed. At it
                                            went
                                            is song that held help face.`}
                                        </p>

                                </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="row search__coffee-bar">
                        <div  style={{marginLeft:0}}>
                            <form action="#" className="shop__search">
                                <label className="shop__search-label" htmlFor="filter">Looking for</label>
                                <input onChange={onInputChange} id="filter" type="text" placeholder="start typing here..."
                                       className="shop__search-input"/>
                            </form>
                        </div>

                            <div className="shop__filter">
                                <div className="shop__filter-label">
                                    Or filter
                                </div>
                                <div className="shop__filter-group">
                                    <button onClick={onSearchBtnClick} className="shop__filter-btn">Brazil</button>
                                    <button onClick={onSearchBtnClick} className="shop__filter-btn">Kenya</button>
                                    <button onClick={onSearchBtnClick} className="shop__filter-btn">Columbia</button>


                                </div>
                            </div>

                    </div>
                    <div className="row-items">

                            <div className="shop__wrapper">
                                {
                                    !filtered?
                                    coffee.map (item =>(
                                        <CoffeeItem
                                            key={item.name + item.country}
                                            coffee={item}
                                            onChosenItem={onChosenItem}
                                        />
                                        ))
                                    :
                                        filtered.map (item =>(

                                                <CoffeeItem
                                                    key={item.name + item.country}
                                                    coffee={item}
                                                    onChosenItem={onChosenItem}
                                                />


                                    ))
                                }

                            </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default CoffeePage