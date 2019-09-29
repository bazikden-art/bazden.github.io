import React from 'react'

const CheerfulUser =({img,name,position,email,phone,i}) =>{
    return(
        <div className={` ${i<3?'cheerfulUser': 'cheerfulUser mobile'}`}>
            <div className='cheerfulUserImg'>
                <img src={img} alt=""/>
            </div>
            <div className='cheerfulUserInfo'>
                <h3 className='cheerfulUserName'>{name}</h3>
                <p className='cheerfulUserPosition'>{position}</p>
                <p className='cheerfulUserEmail'>{email}</p>
                <p className='cheerfulUserPhone'>{phone}</p>
            </div>
        </div>
    )
}

export default CheerfulUser