import { FETCH_POPUP_CONTENT_REQUEST, FETCH_POPUP_CONTENT_SUCCESS, FETCH_POPUP_CONTENT_FAILURE } from '../../types/aids/PopupContentTypes'

const initialState = {
    loading: false,
    aidId: "",
    aidHeader: "",
    aidLng: "",
    aidLat: "",
    aidNo: "",
    aidName: "",
    aidSurname: "",
    aidEmercenyLevel: "",
    aidImgSrc: "",
    error: ""
}

const popupContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POPUP_CONTENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POPUP_CONTENT_SUCCESS:
            return {
                loading: false,
                ...state,
                aidId: action.payload._id,
                aidHeader: action.payload.header,
                aidLng: action.payload.lng,
                aidLat: action.payload.lat,
                aidNo: action.payload.aidNo,
                aidName: action.payload.personName,
                aidSurname: action.payload.personLastName,
                aidEmergencyLevel: action.payload.EmergencyLevel,
                aidImgSrc: action.payload.img,
                error: ''
            }
        case FETCH_POPUP_CONTENT_FAILURE:
            return {
                loading: false,
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}


export default popupContentReducer