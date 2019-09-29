import {SubmissionError} from 'redux-form'


function submit(values) {
    console.log(values)


    if (!values.name) {
        //debugger
        throw new SubmissionError({
            username: 'Enter Name',
            _error: 'Login failed!'
        })
    }
    if(!values.email) {
        throw new SubmissionError({
            email: 'Enter email',
            _error: 'Login Failed'
        })
    }


}

export default submit