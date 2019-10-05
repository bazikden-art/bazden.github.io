import React, {Component} from 'react';
import {Landing} from "./landing";
import * as axios from "axios";

class LandingContainer extends Component {
    state ={
        chosenItem:null
    }
    componentDidMount() {
        axios.get('/db.json').then(res => this.setState({data:res.data}))
    }

    onChosenItem = (data,name) => {

        window.scroll(0,0)
        let  chosenItem
           name === 'coffee'?
               chosenItem =  this.state.data.coffee.find(item => item.name === data)
               :
               chosenItem =  this.state.data.goods.find(item => item.name === data)

        this.setState({chosenItem})
    }




    render() {

        console.log(this.props)

        return (
            <div>
                {
                    this.state.data &&
                    <Landing
                        data={this.state.data}
                        onChosenItem={this.onChosenItem}
                        chosenItem={this.state.chosenItem}
                    />
                }

            </div>
        );
    }
}

export default LandingContainer;