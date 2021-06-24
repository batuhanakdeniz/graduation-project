import { SET_USER_LOCATION } from "../../types/allUsers/UserLocationTypes";

const initialState = {
	lng: 29.004871845245365,
	lat: 41.08494660884534,
};

const userLocationReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_LOCATION:
			return {
				lng: action.payload.lng,
				lat: action.payload.lat,
			};

		default:
			return state;
	}
};

export default userLocationReducer;
