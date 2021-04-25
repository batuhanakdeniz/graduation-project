import { FETCH_AID_LOCATION_REQUEST, FETCH_AID_LOCATION_SUCCESS, FETCH_AID_LOCATION_FAILURE } from '../../types/aids/AidLocationTypes'
import axios from 'axios'
import useState from 'react'
export const fetchAidLocationsRequest = (locations) => {
    return {
        type: FETCH_AID_LOCATION_REQUEST
    }
}
export const fetchAidLocationsSuccess = (locations) => {
    return {
        type: FETCH_AID_LOCATION_SUCCESS,
        payload: locations
    }
}
export const fetchAidLocationsFailure = (error) => {
    return {
        type: FETCH_AID_LOCATION_FAILURE,
        payload: error
    }
}

export const fetchAidLocations = () => {
    return (dispatch) => {
        dispatch(fetchAidLocationsRequest);
        axios.get('http://localhost:5000/map/api/helps/locations')
            .then(response => {
                const locations = response.data
                dispatch(fetchAidLocationsSuccess(locations))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchAidLocationsFailure(errorMsg))
            })
    }
}