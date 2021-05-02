import { SET_USER_LOCATION } from '../../types/user/UserLocationTypes'

const initialState = {
    lng:36.919767118351025,
    lat:31.088782114558335
}

const userLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LOCATION:
            return {
                lng: action.payload.lng,
                lat: action.payload.lat,
            }

        default:
            return state;
    }
}


export default userLocationReducer