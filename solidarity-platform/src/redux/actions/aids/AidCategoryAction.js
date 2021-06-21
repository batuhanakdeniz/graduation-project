import {
	FETCH_AID_CATEGORY_REQUEST,
	FETCH_AID_CATEGORY_SUCCESS,
	FETCH_AID_CATEGORY_FAILURE,
} from "../../types/aids/AidCategoryTypes";
import axios from "axios";
export const fetchAidCategoryRequest = () => {
	return {
		type: FETCH_AID_CATEGORY_REQUEST,
	};
};
export const fetchAidCategorySuccess = (category) => {
	return {
		type: FETCH_AID_CATEGORY_SUCCESS,
		payload: category,
	};
};
export const fetchAidCategoryFailure = (error) => {
	return {
		type: FETCH_AID_CATEGORY_FAILURE,
		payload: error,
	};
};

export const fetchAidCategory = () => {
	return (dispatch) => {
		dispatch(fetchAidCategoryRequest);
		axios
			.get("http://localhost:5000/map/api/helps/category")
			.then((response) => {
				const category = response.data;
				let categories = [];
				category.map(
					(cat) =>
						(categories = [
							...categories,
							{
								key: cat.categoryName,
								value: cat.categoryCode,
								subCategories: cat.subCategory,
							},
						])
				);

				console.log("sssss", category);
				dispatch(fetchAidCategorySuccess(categories));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchAidCategoryFailure(errorMsg));
			});
	};
};
