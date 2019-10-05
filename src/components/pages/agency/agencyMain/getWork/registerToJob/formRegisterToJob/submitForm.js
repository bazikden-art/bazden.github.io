import {SubmissionError} from 'redux-form'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
    return sleep(1000).then(() => {
        //console.log(values.position_id, values.photo)
        if (!values.name) {
            throw new SubmissionError({
                name: 'Enter your Name',
                _error: 'Login failed name!'
            })
        } else if (!values.email) {
            throw new SubmissionError({
                email: 'Enter email',
                _error: 'Login Failed email'
            })
        } else if (values.phone && values.phone.length < 21) {
            throw  new SubmissionError({
                phone: 'Not Valid Phone Number',
                _error: 'Login Failed phone'
            })
        } else if (!values.position_id) {
            throw  new SubmissionError({
                position_id: 'Select your position',
                _error: 'Login Failed position'
            })
        } else if (!values.photo) {
            throw  new SubmissionError({
                photo: 'Load yor photo',
                _error: 'Login Failed photo'
            })
        }

    })




}

export default submit