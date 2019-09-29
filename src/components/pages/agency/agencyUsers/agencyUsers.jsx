import React from 'react'

export const AgencyUser = ({name,email,photo,position,phone}) => {
    //console.log(props)
    return (


        <div className='AgencyUser'>
            <div className='AgencyUsersIcon'>
                <img src={photo} alt=""/>
            </div>
            <div className='AgencyUsersInfo'>
                <div className='AgencyUsersName'>
                    <h4> {name.toUpperCase()} </h4>
                </div>
                <div className='AgencyUsersEmail'>
                    <span>Email : {email} </span>
                </div>
                <div className='AgencyUsersPhone'>
                    <span>Phone : {phone} </span>
                </div>
                <div className='AgencyUsersPosition'>
                    <span>Position : {position} </span>
                </div>
            </div>

        </div>
    )
}