import React from 'react';

function GetQuaintedSecondBlockItem({data:{img,h3,p,width}}) {
    return (
        <div  className='getQuaintedSecondBlockItem'>
            <img src={img} alt=""/>
            <div className='getQuaintedSecondBlockItemText'>
                <h3>{h3}</h3>
                <p>{p}</p>
            </div>

        </div>
    );
}

export default GetQuaintedSecondBlockItem;