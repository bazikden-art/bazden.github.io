export const required =(value) =>{
    if(value) return undefined
    return "Field is Required"
}


export const max = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined