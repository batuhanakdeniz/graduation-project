import { SET_USER_LOCATION } from '../../types/user/UserLocationTypes'

export const setUserLocation = (type) => {
    return {
        type: SET_USER_LOCATION,
        payload: type
    }
}