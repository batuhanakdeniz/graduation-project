import { SET_AID_LOCATION } from '../../types/aids/AddAidTypes'

const initialState = {
    lng: "",
    lat: "",
}

const aidAidLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AID_LOCATION:
            return {
                lng: action.payload.lng,
                lat: action.payload.lat
            }

        default:
            return state;
    }
}


export default aidAidLocationReducer