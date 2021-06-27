import {
	FETCH_MAP_SEARCH_AID_REQUEST,
	FETCH_MAP_SEARCH_AID_SUCCESS,
	FETCH_MAP_SEARCH_AID_FAILURE,
} from "../../types/aids/MapSearchAidTypes";

import axios from "axios";

export const fetchMapSearchAidRequest = () => {
	return {
		type: FETCH_MAP_SEARCH_AID_REQUEST,
	};
};
export const fetchMapSearchAidSuccess = (searchContent) => {
	return {
		type: FETCH_MAP_SEARCH_AID_SUCCESS,
		payload: searchContent,
	};
};
export const fetchMapSearchAidFailure = (error) => {
	return {
		type: FETCH_MAP_SEARCH_AID_FAILURE,
		payload: error,
	};
};

export const fetchMapSearchAid = (searchContent) => {
	return (dispatch) => {
		dispatch(fetchMapSearchAidRequest);
		let search = { search: searchContent };
		axios
			.post(`http://localhost:5000/map/api/helps/search`, search)
			.then((response) => {
				const mapSearchAid = response.data;
				console.log("mapSearchAid", mapSearchAid);
				dispatch(fetchMapSearchAidSuccess(mapSearchAid));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchMapSearchAidFailure(errorMsg));
			});
	};
};
