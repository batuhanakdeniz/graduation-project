import { FETCH_POPUP_CONTENT_REQUEST, FETCH_POPUP_CONTENT_SUCCESS, FETCH_POPUP_CONTENT_FAILURE } from '../../types/aids/PopupContentTypes'
import axios from 'axios'

export const fetchPopupContentRequest = () => {
    return {
        type: FETCH_POPUP_CONTENT_REQUEST
    }
}
export const fetchPopupContentSuccess = (popupContent) => {
    return {
        type: FETCH_POPUP_CONTENT_SUCCESS,
        payload: popupContent
    }
}
export const fetchPopupContentFailure = (error) => {
    return {
        type: FETCH_POPUP_CONTENT_FAILURE,
        payload: error
    }
}

export const fetchPopupContent = (id = 1) => {
    return (dispatch) => {
        dispatch(fetchPopupContentRequest);
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                const popupContent = response.data
                dispatch(fetchPopupContentSuccess(popupContent))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchPopupContentFailure(errorMsg))
            })
    }
}