import {
	FETCH_PENDING_COMMENTS_REQUEST,
	FETCH_PENDING_COMMENTS_SUCCESS,
	FETCH_PENDING_COMMENTS_FAILURE,
} from "../../types/admin/PendingCommentsTypes";
import axios from "axios";

export const fetchPendingCommentsRequest = () => {
	return {
		type: FETCH_PENDING_COMMENTS_REQUEST,
	};
};
export const fetchPendingCommentsSuccess = (pendingAids) => {
	return {
		type: FETCH_PENDING_COMMENTS_SUCCESS,
		payload: pendingAids,
	};
};
export const fetchPendingCommentsFailure = (error) => {
	return {
		type: FETCH_PENDING_COMMENTS_FAILURE,
		payload: error,
	};
};

export const fetchPendingComments = () => {
	return (dispatch) => {
		dispatch(fetchPendingCommentsRequest);
		axios
			.get(`http://localhost:5000/map/api/helps/details/comment/pending`)
			.then((response) => {
				const pendingComments = response.data;
				console.log("response.data", response.data);
				dispatch(fetchPendingCommentsSuccess(pendingComments));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchPendingCommentsFailure(errorMsg));
			});
	};
};
export const confirmPendingCommentByID = (commentID) => {
	return async (dispatch) => {
		try {
			const response = await axios.put(
				`http://localhost:5000/map/api/helps/subcategory/${commentID}`
			);
			return response;
		} catch (error) {
			return error;
		}
	};
};
export const deletePendingCommentByID = (commentID) => {
	return async (dispatch) => {
		try {
			const response = await axios.delete(
				`http://localhost:5000/map/api/helps/subcategory/${commentID}`
			);
			return response;
		} catch (error) {
			return error;
		}
	};
};
