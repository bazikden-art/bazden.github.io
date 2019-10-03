import React from 'react'

const style = {
    maxWidth:'1140px',
    margin:'0 auto',
    position:'relative',
    top:'64px'
}

export  const LayOut = (props)=>{
    return(
        <div style={style} className='AgencyLayout'>
            {props.children}
        </div>
    )
}