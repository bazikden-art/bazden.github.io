import React from 'react'
import img from '../../images/avatar.png'
import spinner from '../../images/spinner.svg'
import {NavLink} from "react-router-dom";


const Users = ({users, loading,onBtnClick,followed,pages,getUsers}) => {
    const onPageBtnClick = (page) =>{
        getUsers(page)

    }


    return (

        <div className='users'>

            {loading ?
                <div className='spinner'>
                    <img src={spinner} alt=""/>
                </div>
                :
                <div className='users-list'>
                    <div className='users-nav-panel'></div>
                    {
                        pages && pages.map(p => (
                            <button onClick={()=>onPageBtnClick(p)} className='users-nav-btn' key={p}>{p}</button>
                        ))
                    }
                    {
                        users && users.map(u => (
                                <div key={u.id} className='user'>
                                    <div className='user-icon'>
                                        <NavLink to={`profile/${u.id}`}><img src={u.photos.small? u.photos.small :img} alt=""/></NavLink>
                                        <button onClick={() =>onBtnClick(u.id)} className='user-icon-btn'>
                                            {u.followed?'Friend':'Not Friend'}
                                        </button>
                                    </div>

                                    <div className='user-info'>
                                        <div className='user-name'>{u.name}</div>
                                        <div>User status</div>
                                        <div>User city</div>

                                    </div>


                                </div>
                            )
                        )
                    }
                </div>
            }
        </div>
    )
}
export default Users