import React from 'react'

export const ProfileCard = () => {
    return (
        <div className='profile-card'>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjyRYvuZhMSWJNX-lMIQxeLLAFi1ZP4a5i4SMvTHtHtszhAtzlg"
                alt=""/>
            <div className="profile-card-block">
                <div>Full Name</div>
                <div>Count</div>
                <div>followers</div>
            </div>
        </div>
    )
}