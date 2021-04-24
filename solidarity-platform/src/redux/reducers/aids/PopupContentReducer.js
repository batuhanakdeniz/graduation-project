import { FETCH_POPUP_CONTENT_REQUEST, FETCH_POPUP_CONTENT_SUCCESS, FETCH_POPUP_CONTENT_FAILURE } from '../../types/aids/PopupContentTypes'

const initialState = {
    loading: false,
    aidId: undefined,
    aidHeader: "",
    aidImgSrc: "https://picsum.photos/200/300.jpg",
    aidName: "",
    aidSurname: "",
    aidEmercenyLevel: 3,
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
                aidId: action.payload.id,
                aidHeader: action.payload.email,
                aidName: action.payload.name,
                aidSurname: action.payload.username,
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