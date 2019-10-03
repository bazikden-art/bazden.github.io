import {SubmissionError} from 'redux-form'


function submit(values) {

    if (!values.name) {
         throw new SubmissionError({
            name: 'Enter your Name',
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