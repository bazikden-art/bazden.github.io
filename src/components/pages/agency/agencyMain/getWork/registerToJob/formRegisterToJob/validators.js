export const validate = values => {

    const errors = {}
    !values.name && (errors.name = 'Required Name')
    !values.email && (errors.email = 'Required Email')
    // !values.phone && (errors.phone = 'Required Phone')
    // values.phone  && !phoneCheck(values.phone) &&(errors.phone = 'Incorrect Number')
    return errors
}

const phoneCheck = (value) => {

    let check = value.split('').find(e => e === '-')
    console.log(check)
    if (check) {
        return false
    } else return true
}