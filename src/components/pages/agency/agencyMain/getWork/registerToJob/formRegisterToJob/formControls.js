import React, {useState} from "react"
import InputMask from "react-input-mask"



export const InputTel = (props) => {
    return (
        <InputMask className={props.className} maskChar={'-'} mask="+38 ( 099 \) 999 99 99" value={props.value}
                   onChange={props.onChange}>
            {(props) => {
                return <input type='tel'{...props} />
            }
            }
        </InputMask>
    )
}



const Capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


export const Input = (props) => {
    const onLooseFocus = (e) => {
        console.log(e.target, e.target.valueOf)
        if (e.target.value === "") {
            e.target.parentNode.lastElementChild.style.top = '10px'
            e.target.parentNode.lastElementChild.style.zIndex = -1
        }
    }

    const onClick = (e) => {
        e.target.parentNode.lastElementChild.style.top = '-12px'
        e.target.parentNode.lastElementChild.style.zIndex = 1
    }

    const elemName = Capitalize(props.input.name)


    return (
        <div onClick={onClick} className={`formRegisterToJob${elemName}`}>
            <div className={`formRegisterToJob${elemName}Input`}>
                <input onBlur={onLooseFocus} type={props.type} pattern={props.mask} {...props.input}/>
                <div>{elemName}</div>
            </div>
            <div className='formRegisterToJobNameError'>
                {props.error && <span className='formRegisterToJobError'>{props.error}</span>}
            </div>
        </div>
    )
}


export const UserPhone = (props) => {

    const onLooseFocus = (e) => {
        if (e.target.value === "") {
            e.target.parentNode.lastElementChild.style.top = '10px'
            e.target.parentNode.lastElementChild.style.zIndex = -1
        }
    }

    const onClick = (e) => {
        e.target.parentNode.lastElementChild.style.top = '-12px'
        e.target.parentNode.lastElementChild.style.zIndex = 1
    }

    return (
        <div className='formRegisterToJobName'>
            <div onClick={onClick} className='formRegisterToJobPhoneInput'>
                <InputMask className={props.className} maskChar={'-'} mask="+38 ( 099 \) 999 99 99" value={props.value}
                           onChange={props.onChange} onBlur={onLooseFocus} {...props.input}>
                    {(props) => {
                        return <input type='tel'{...props} />
                    }
                    }
                </InputMask>
                <div><span>Phone</span></div>
            </div>
            <div className='formRegisterToJobPhoneError'>
                {props.error && <span className='formRegisterToJobError'>{props.error}</span>}
            </div>
        </div>
    )
}


export const userPosition = ({input,meta,positions,error}) => {



    return (
        <div className='formRegisterToJobPosition'>
            <div className='formRegisterToJobPositionInput'>
                <select name="position" id="" {...input}>...select your position
                    <option>...select your position</option>
                    {
                        positions && positions.map( option =>(
                            <option key={option.id} value={option.id}>{option.name}</option>
                        ) )
                    }

                </select>
                <div>Position</div>
            </div>
            <div className='formRegisterToJobPositionError'>
                {error && <span className='formRegisterToJobError'>{error}</span>}
            </div>
        </div>
    )
}

export const userImage = (props) => {
    return (
        <div className='formRegisterToJobPhoto'>
            <div className='formRegisterToJobPhotoInput'>
                <InputFile {...props}/>
                <div><span>Photo</span></div>
            </div>
            <div className='formRegisterToJobPhotoError'>
                {props.error && <span className='formRegisterToJobError'>{props.error}</span>}
            </div>
        </div>
    )
}

const InputFile = (props) => {
    const [fileName,setFileName] = useState(null)
    const onChange = (e) => {
         props.input.onChange(e.target.files[0])
        setFileName(e.target.files[0].name)
    }

    return (
        <div className='formRegisterToJobPhotoInputFile' >

                <div className={'formRegisterToJobPhotoInputFileName'}>
                    { fileName ? fileName :"Photo file name"}
                </div>

                <div className='formRegisterToJobPhotoInputFileBtn'>
                    <input

                        accept="image/*"
                        id="raised-button-file"
                       // multiple
                        type="file"
                        //value=''
                        onChange={onChange}


                    />
                    <button>Upload</button>
                </div>




        </div>

    )
}

