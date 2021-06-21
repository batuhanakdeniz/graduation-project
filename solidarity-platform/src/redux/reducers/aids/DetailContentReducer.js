import {
	FETCH_DETAIL_CONTENT_REQUEST,
	FETCH_DETAIL_CONTENT_SUCCESS,
	FETCH_DETAIL_CONTENT_FAILURE,
} from "../../types/aids/DetailContentTypes";
const initialState = {
	loading: false,
	aidId: undefined,
	aidHeader: "",
	aidImgSrc: [],
	comments: [],
	aidName: "",
	aidSurname: "",
	aidEmergencyLevel: "",
	aidDetail: "",
	error: "",
};

const detailContentReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DETAIL_CONTENT_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_DETAIL_CONTENT_SUCCESS:
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
				aidEmergencyLevel: action.payload.emergencyLevel,
				aidImgSrc: action.payload.img,
				comments: action.payload.comment,
				aidDetail: action.payload.detail,
				error: "",
			};
		case FETCH_DETAIL_CONTENT_FAILURE:
			return {
				loading: false,
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default detailContentReducer;

/**
 * {
            id: 1,
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            id: 2,
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            id: 3,
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        }
 */
