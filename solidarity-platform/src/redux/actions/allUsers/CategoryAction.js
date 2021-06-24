import axios from "axios";

export const fetchCategoryType = (categoryCode) => {
	return async (dispatch) => {
		try {
			const category = await axios.get(
				`http://localhost:5000/map/api/helps/category/${categoryCode}`
			);
			const categoryName = category.data[0].categoryName;
			console.log("categoryName", categoryName);
			return categoryName;
		} catch (error) {
			return error;
		}
	};
};
export const fetchSubcategoryType = (subcategoryCode) => {
	return async (dispatch) => {
		try {
			const subcategory = await axios.get(
				`http://localhost:5000/map/api/helps/subcategory/${subcategoryCode}`
			);
			const subcategoryName = subcategory.data[0].subCategoryName;
			console.log("subcategoryName", subcategoryName);
			return subcategoryName;
		} catch (error) {
			return error;
		}
	};
};
