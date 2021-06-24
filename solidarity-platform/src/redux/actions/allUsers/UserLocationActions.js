import { SET_USER_LOCATION } from "../../types/allUsers/UserLocationTypes";

export const setUserLocation = (type) => {
	return {
		type: SET_USER_LOCATION,
		payload: type,
	};
};
