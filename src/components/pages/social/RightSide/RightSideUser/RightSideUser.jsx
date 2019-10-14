import React from 'react'


const RightSideUser = ({user}) => {

    return (
        <>
            {
                user && !user.followed &&
                <div className='right-side-user'>

                    <div className='right-side-user-logo'>
                        <img
                            src={user.photos.small || "https://ae01.alicdn.com/kf/HTB1n6GJnBDH8KJjSspnq6zNAVXaw/Cubojue-Transparent-Glasses-Men-Women-Small-Face-Optical-Eyeglass-Frames-Eyewear-for-Prescription-Female-Vintage-Square.jpg"}
                            alt=""/>

                    </div>
                    <div className='right-side-user-info'>
                        <div className='right-side-user-name'>{user.name}</div>
                        <a href=" ">Add Friend</a>
                    </div>
                </div>
            }

        </>
    )
}

export default RightSideUser