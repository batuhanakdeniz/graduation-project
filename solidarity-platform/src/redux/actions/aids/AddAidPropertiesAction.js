import { SET_AID_LOCATION_PROPERTIES } from "../../types/aids/AddAidPropertiesTypes";

export const setAidLocationProperties = (properties) => {
	return {
		type: SET_AID_LOCATION_PROPERTIES,
		payload: properties,
	};
};
