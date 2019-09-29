const IMG_FILE_NAME= "IMG_FILE_NAME"

let initialState = {}

export const agencyReducer = (state = initialState,action) =>{

    switch (action.type) {

        case IMG_FILE_NAME:

            return{
                ...state,
                formData:action.data
            }
        default: return state

    }
}

export const addFormData = (data) =>({type:IMG_FILE_NAME,data})