import {
	FETCH_POPUP_CONTENT_REQUEST,
	FETCH_POPUP_CONTENT_SUCCESS,
	FETCH_POPUP_CONTENT_FAILURE,
} from "../../types/aids/PopupContentTypes";
import axios from "axios";

export const fetchPopupContentRequest = () => {
	return {
		type: FETCH_POPUP_CONTENT_REQUEST,
	};
};
export const fetchPopupContentSuccess = (popupContent) => {
	return {
		type: FETCH_POPUP_CONTENT_SUCCESS,
		payload: popupContent,
	};
};
export const fetchPopupContentFailure = (error) => {
	return {
		type: FETCH_POPUP_CONTENT_FAILURE,
		payload: error,
	};
};

export const fetchPopupContent = (aidId) => {
	return async (dispatch) => {
		dispatch(fetchPopupContentRequest);
		try {
			const response = await axios.get(
				`http://localhost:5000/map/api/helps/basics/${aidId}`
			);
			const category = await axios.get(
				`http://localhost:5000/map/api/helps/category/${response.data.typeofhelp.category}`
			);
			const subcategory = await axios.get(
				`http://localhost:5000/map/api/helps/subcategory/${response.data.typeofhelp.subcategory}`
			);
			const categoryName = category.data[0].categoryName;
			const subcategoryName = subcategory.data[0].subCategoryName;
			let popupContent = response.data;
			popupContent = {
				...popupContent,
				categoryName: categoryName,
				subcategoryName: subcategoryName,
			};
			dispatch(fetchPopupContentSuccess(popupContent));
		} catch (error) {
			const errorMsg = error.message;
			dispatch(fetchPopupContentFailure(errorMsg));
		}
	};
};
