import React from 'react'

const FormControl = ({input, meta: {touched, error}, ...props}) => {
    return <>
        <div className={`login-elem ${touched && error ? 'error' : ''}`}>
            {props.children}
        </div>
        <div>
            {touched && error && <span className='login-error'>{error}</span>}
        </div>
    </>
}

export const Input = (props)=>{
    return <FormControl {...props}><input placeholder={props.placeholder} {...props.input}/></FormControl>
}

export const TextArea = (props)=>{
    return <FormControl {...props}><textarea placeholder={props.placeholder} {...props.input}/></FormControl>
}
