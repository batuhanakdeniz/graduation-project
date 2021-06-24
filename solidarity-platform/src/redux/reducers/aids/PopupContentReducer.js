import {
	FETCH_POPUP_CONTENT_REQUEST,
	FETCH_POPUP_CONTENT_SUCCESS,
	FETCH_POPUP_CONTENT_FAILURE,
} from "../../types/aids/PopupContentTypes";

const initialState = {
	loading: false,
	aidId: "",
	aidHeader: "",
	aidLng: "",
	aidLat: "",
	aidNo: "",
	aidName: "",
	aidSurname: "",
	aidEmercenyLevel: "",
	aidImgSrc: "",
	createdAt: "",
	createrUsername: "",
	helpingUsers: [],
	statusForHelping: undefined,
	categoryName: "",
	subcategoryName: "",
	error: "",
};

const popupContentReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_POPUP_CONTENT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_POPUP_CONTENT_SUCCESS:
			return {
				loading: false,
				...state,
				aidId: action.payload._id,
				aidHeader: action.payload.header,
				aidLng: action.payload.lng,
				aidLat: action.payload.lat,
				aidNo: action.payload.aidNo,
				aidName: action.payload.personName,
				aidSurname: action.payload.personLastName,
				aidEmercenyLevel: action.payload.emergencyLevel,
				aidImgSrc: action.payload.img,
				createdAt: action.payload.createdAt,
				createrUsername: action.payload.creatorUserName,
				helpingUsers: action.payload.HelpingUser,
				statusForHelping: action.payload.statusForHelping,
				categoryName: action.payload.categoryName,
				subcategoryName: action.payload.subcategoryName,
				error: "",
			};
		case FETCH_POPUP_CONTENT_FAILURE:
			return {
				loading: false,
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default popupContentReducer;
