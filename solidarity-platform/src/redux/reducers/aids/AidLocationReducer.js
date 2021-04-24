import { FETCH_AID_LOCATION_REQUEST, FETCH_AID_LOCATION_SUCCESS, FETCH_AID_LOCATION_FAILURE } from '../../types/aids/AidLocationTypes'

const initialState = {
    loading: false,
    locations: [],
    emergencyLevel: 3,
    error: ""
}

const aidLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AID_LOCATION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_AID_LOCATION_SUCCESS:
            return {
                ...state,
                loading: false,
                locations: action.payload,
                error: ''
            }
        case FETCH_AID_LOCATION_FAILURE:
            return {
                ...state,
                loading: false,
                locations: [],
                error: action.payload
            }

        default:
            return state;
    }
}


export default aidLocationReducer