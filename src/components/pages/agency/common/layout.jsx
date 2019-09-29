import React from 'react'

const style = {
    maxWidth:'1140px',
    margin:'63px auto 0'
}

export  const LayOut = (props)=>{
    return(
        <div style={style} className='AgencyLayout'>
            {props.children}
        </div>
    )
}