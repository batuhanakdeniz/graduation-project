
import { SET_AID_LOCATION } from '../../types/aids/AddAidTypes'

export const setAidLocation = (location) => {
    return {
        type: SET_AID_LOCATION,
        payload: location
    }
}