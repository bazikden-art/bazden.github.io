import React from 'react';

import htmlIcon from '../../../images/imgs/html.svg'
import cssIcon from '../../../images/imgs/css.svg'
import jsIcon from '../../../images/imgs/javascript.svg'
import GetQuaintedSecondBlockItem from "./getQuaintedSecondBlockItem/getQuaintedSecondBlockItem";

const items =[
    {
        img:htmlIcon,
        h3:"I'm in love with HTML",
        p:'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications.',

    },
    {
        img:cssIcon,
        h3:'CSS is my best friend',
        p:'Cascading Style Sheets (CSS) is a  style sheet language used for describing the presentation \n' +
            'of a document written in a markup language \n' +
            'like HTML.',

    },
    {
        img:jsIcon,
        h3:'JavaScript is my passion',
        p:'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.',

    }
]


function GetQuaintedSecondBlock() {
    return (
        <div id='agencyRelationships' className='getQuaintedSecondBlock'>
            <h2 className='getQuaintedSecondBlockH2'>About my relationships with web-development</h2>

            <div className='getQuaintedSecondBlockItems'>
                {
                    items.map(data =>(
                        <GetQuaintedSecondBlockItem key={data.h3 +data.p} data={data}/>
                    ))
                }
            </div>

        </div>
    );
}

export default GetQuaintedSecondBlock;