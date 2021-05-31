import {
	FETCH_DETAIL_CONTENT_REQUEST,
	FETCH_DETAIL_CONTENT_SUCCESS,
	FETCH_DETAIL_CONTENT_FAILURE,
} from "../../types/aids/DetailContentTypes";
import joe from "./joe.jpg";
const initialState = {
	loading: false,
	aidId: undefined,
	aidHeader: "",
	aidImgSrc: [],
	comments: [
		{
			date: "1 Hour Ago",
			image: joe,
			meta: "4 Likes",
			summary: "Elliot Fu",
		},
		{
			date: "4 days ago",
			image: joe,
			meta: "1 Like",
			summary: "Helen Troy",
			extraImages: [
				"https://picsum.photos/id/1010/250/150/",
				"https://picsum.photos/id/1015/250/150/",
			],
		},
		{
			date: "3 days ago",
			image: joe,
			meta: "8 Likes",
			summary: "Joe Henderson",
			extraText:
				"Ours is a life of constant reruns. We're always circling back to where we'd we started.",
		},
		{
			date: "4 days ago",
			image: joe,
			meta: "41 Likes",
			summary: "Justen Kitsune",
			extraText:
				"Look at these fun pics I found from a few years ago. Good times.",
			extraImages: [
				"https://picsum.photos/id/1010/250/150/",
				"https://picsum.photos/id/1015/250/150/",
			],
		},
	],
	aidName: "",
	aidSurname: "",
	aidEmercenyLevel: "",
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
				aidEmergencyLevel: action.payload.EmergencyLevel,
				aidImgSrc: action.payload.img,
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
