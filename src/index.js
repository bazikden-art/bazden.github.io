import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'

import './style.css'
import {Provider} from "react-redux";
import {store} from "./redux/store";

ReactDom.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>


    , document.getElementById('root'))

window.store =store