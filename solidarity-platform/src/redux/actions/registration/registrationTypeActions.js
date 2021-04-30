import { SET_REGISTRATION_TYPE } from '../../types/registration/registrationTypes'

export const setRegistrationType = (type) => {
    return {
        type: SET_REGISTRATION_TYPE,
        payload: type
    }
}