import React,{Component} from 'react'
import {dialogsAPI} from "../../api/dialogsApi";

class Messages extends Component {
    componentDidMount() {
        dialogsAPI.getAllDialogs()
            .then(res =>  console.log(res))
    }

    render(){
        return(
            <div className='messages'>
                Messages
            </div>
        )
    }

}
export default Messages