import { SET_AID_LOCATION_PROPERTIES } from "../../types/aids/AddAidPropertiesTypes";

const initialState = {
	properties: [],
};

const aidAidPropertiesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AID_LOCATION_PROPERTIES:
			return {
				properties: action.payload,
			};

		default:
			return state;
	}
};

export default aidAidPropertiesReducer;
