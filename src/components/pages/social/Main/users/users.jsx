import React, {useEffect, useState} from 'react'
import img from '../../images/avatar.png'
import {NavLink} from "react-router-dom";
import prev from '../../images/prev-arrow.png'
import next from '../../images/next-arrow.png'


const Users = ({users, loading, onBtnClick, followed, getUsers, pageCount}) => {
    const [pages, setPages] = useState(null)


    const [portionNumber, setPortionNumber] = useState(1)
    const [downloadPage, setDownloadPage] = useState(1)
    const [activeBtn, setActiveBtn] = useState(1)


    let portionSize = 10
    let portionCount = Math.ceil(pageCount / portionSize)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1

    let rightPortionPageNumber = portionNumber * portionSize


    const onPageBtnClick = (page) => {

        let btn = document.querySelector('.users-nav-btn-active')
        btn.className = '.users-nav-btn'
        setActiveBtn(page)
        getUsers(page)

    }

    useEffect(() => {
        getUsers(downloadPage)
        if (pageCount) {
            const pages = []
            for (let i = 1; i <= pageCount; i++) {
                pages.push(i)
            }
            return setPages(pages)
        }


    }, [pageCount, downloadPage, getUsers])

    const onPrevClick = () => {
        setPortionNumber(portionNumber - 1)
        setDownloadPage(leftPortionPageNumber - portionNumber)
        setActiveBtn(leftPortionPageNumber - portionSize)
    }

    const onNextClick = () => {
        setPortionNumber(portionNumber + 1)
        setDownloadPage(rightPortionPageNumber + 1)
        setActiveBtn(rightPortionPageNumber + 1)
    }


    return (

        <div className='users'>


            <div className='users-nav-panel'>
                {
                    portionNumber > 1 &&
                    <div onClick={onPrevClick} className='users-nav-panel-prev'>
                        <img src={prev} alt=""/>
                    </div>
                }

                {
                    pages && pages
                        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(p => (
                            <button onClick={() => onPageBtnClick(p)}
                                    className={p === activeBtn ? 'users-nav-btn-active' : 'users-nav-btn'}
                                    key={p}>{p}</button>
                        ))
                }
                {
                    portionNumber < portionCount &&
                    <div onClick={onNextClick} className='users-nav-panel-next'>
                        <img src={next} alt=""/>
                    </div>
                }

            </div>
            <div className='users-list'>
                {
                    users && users.map(u => (
                            <div key={u.id} className='user'>
                                <div className='user-icon'>
                                    <NavLink to={`profile/${u.id}`}><img src={u.photos.small ? u.photos.small : img}
                                                                         alt=""/></NavLink>
                                    <button onClick={() => onBtnClick(u.id)} className='user-icon-btn'>
                                        {u.followed ? 'Del Friend' : 'Add Friend'}
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

        </div>
    )
}
export default Users