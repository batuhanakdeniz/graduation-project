import { SET_REGISTRATION_TYPE } from '../../types/registration/registrationTypes'

const initialState = {
    type:1,
}

const registrationTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTRATION_TYPE:
            return {
                type: action.payload
            }

        default:
            return state;
    }
}


export default registrationTypeReducer