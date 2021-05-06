import { SET_AID_LOCATION_LATLNG } from "../../types/aids/AddAidTypes";

export const setAidLocationLatLng = (location) => {
	return {
		type: SET_AID_LOCATION_LATLNG,
		payload: location,
	};
};
