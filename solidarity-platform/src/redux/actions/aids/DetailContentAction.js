import {
	FETCH_DETAIL_CONTENT_REQUEST,
	FETCH_DETAIL_CONTENT_SUCCESS,
	FETCH_DETAIL_CONTENT_FAILURE,
} from "../../types/aids/DetailContentTypes";

import axios from "axios";

export const fetchDetailContentRequest = () => {
	return {
		type: FETCH_DETAIL_CONTENT_REQUEST,
	};
};
export const fetchDetailContentSuccess = (detailContent) => {
	return {
		type: FETCH_DETAIL_CONTENT_SUCCESS,
		payload: detailContent,
	};
};
export const fetchDetailContentFailure = (error) => {
	return {
		type: FETCH_DETAIL_CONTENT_FAILURE,
		payload: error,
	};
};

export const fetchDetailContent = (aidId) => {
	return (dispatch) => {
		dispatch(fetchDetailContentRequest);
		axios
			.get(`http://localhost:5000/map/api/helps/details/${aidId}`)
			.then((response) => {
				const detailContent = response.data;
				console.log("detay content", response);
				dispatch(fetchDetailContentSuccess(detailContent));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchDetailContentFailure(errorMsg));
			});
	};
};
