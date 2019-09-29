import TextField from "@material-ui/core/TextField";
import React from "react";
import InputMask from "react-input-mask";
import Button from "@material-ui/core/Button";


const Input = (props) => {
    return (
        <InputMask className={props.className} maskChar={'-'} mask="+38 ( 099 \) 999 99 99" value={props.value}
                   onChange={props.onChange}>
            {(props) => <input    {...props} type="tel"/>}
        </InputMask>
    )
}

const InputFile = (props) => {

    const inputFileName = props.value.name
    const onChange = (e) => {

        props.onChange(e.target.files[0])

    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', position: 'relative'}}
             className={props.className}>
            {
                inputFileName && <div className='inputFileName'>
                    {inputFileName}
                </div>
            }
            <div className=''>

                <input

                    onChange={onChange}
                    accept="image/*"
                    style={{display: 'none'}}
                    id="raised-button-file"
                    multiple
                    type="file"

                />

                <label htmlFor="raised-button-file">
                    <Button component="span" className='photoToJob'>
                        Upload
                    </Button>
                </label>
            </div>


        </div>

    )
}


const currencies = [
    {
        value: '',
        label: '... Select your position',
    },
    {
        value: 'backend-developer',
        label: 'Backend developer',
    },
    {
        value: 'frontend-developer',
        label: 'Frontend developer',
    },
    {
        value: 'qa',
        label: 'QA',
    },

    {
        value: 'lead-designer',
        label: 'Lead designer',
    },
    {
        value: 'ControlDepartment',
        label: 'Leading specialist of the Control Department',
    },
    {
        value: 'contextual-advertising-specialist',
        label: 'The contextual advertising specialist',
    }
];


export const userName = ({input, meta: {touched, error}}) => {
    console.log(touched,error)
    return (
        <>
            <TextField
                id="outlined-with-placeholder"
                label="Name"
                name='name'
                placeholder="Your Name"
                className={'registerToJobUserName'}
                margin="normal"
                variant="outlined"
                inputRef= {{ref : this.name}}
                {...input}
            />
            {touched && error && <span>{error}</span>}
        </>
    )
}

export const userEmail = ({input, meta: {touched, error}}) => {
    return (
        <>
            <TextField
                id="outlined-email-input"
                label="Email"
                placeholder='Your Email'
                className={'registerToJobUserEmail'}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                {...input}
            />
            {touched && error && <span>{error}</span>}

        </>
    )
}

export const userPhone = ({input, meta: {touched, error}}) => {

    return (
        <>
            <TextField
                id="outlined-name"
                label="Phone"
                className={'registerToJobUserPhone'}
                InputProps={{
                    inputComponent: Input,
                }}
                margin="normal"
                variant="outlined"
                {...input}
            />
            {touched && error && <span>{error}</span>}
        </>
    )
}

export const userPosition = ({input, meta: {touched, error}}) => {

    return (<>
            <TextField
                id="outlined-select-currency-native"
                select
                className={'registerToJobUserSelectPosition select-position'}

                SelectProps={{
                    native: true,

                }}
                margin="normal"
                variant="outlined"
                {...input}
            >
                {currencies.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}

            </TextField>
        </>
    )
}

export const userImage = ({input, meta: {touched, error}}) => {


    return (<>
            <TextField
                className={'registerToJobUserUpdatePhoto update-photo'}
                placeholder="Placeholder"
                margin="normal"
                variant="outlined"

                InputProps={{
                    inputComponent: InputFile,
                    inputProps: {...input}
                }}
                helperText="File format jpg  up to 5 MB, the minimum size of 70x70px"
                {...input}
            />
            {touched && error && <span>{error}</span>}
        </>
    )
}

