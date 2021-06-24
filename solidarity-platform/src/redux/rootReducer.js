import { combineReducers } from "redux";
import allAidsReducer from "./reducers/admin/AllAidsReducer";
import pendingCommentsReducer from "./reducers/admin/PendingCommentsReducer";
import allUsersReducer from "./reducers/admin/AllUsersReducer";
import pendingAidsReducer from "./reducers/admin/PendingAidsReducer";
import pendingUsersReducer from "./reducers/admin/PendingUsersToConfirmReducer";

import aidAidLocationReducer from "./reducers/aids/AddAidLocationReducer";
import aidAidPropertiesReducer from "./reducers/aids/AddAidPropertiesReducer";
import AidLocationReducer from "./reducers/aids/AidLocationReducer";
import AidCategoryReducer from "./reducers/aids/AidCategoryReducer";
import mapSearchAidReducer from "./reducers/aids/MapSearchAidReducer";
import detailContentReducer from "./reducers/aids/DetailContentReducer";
import popupContentReducer from "./reducers/aids/PopupContentReducer";

import numberOfAidsReducer from "./reducers/homepage/numberOfAidsReducer";
import numberOfHelpedAidsReducer from "./reducers/homepage/numberOfHelpedAidsReducer";
import numberOfUsersReducer from "./reducers/homepage/numberOfUsersReducer";

import loggedUserReducer from "./reducers/allUsers/LoggedUserReducer";
import userLocationReducer from "./reducers/allUsers/UserLocationReducer";
import loggedUsersAidsReducer from "./reducers/allUsers/LoggedUsersAidsReducer";
import LoggedUsersCommentsReducer from "./reducers/allUsers/LoggedUsersCommentsReducer";

const rootReducer = combineReducers({
	aidLocations: AidLocationReducer,
	popupContent: popupContentReducer,
	addAidLocation: aidAidLocationReducer,
	addAidProperties: aidAidPropertiesReducer,
	detailContent: detailContentReducer,
	userData: loggedUserReducer,
	userLocation: userLocationReducer,
	numberOfAids: numberOfAidsReducer,
	numberOfHelpedAids: numberOfHelpedAidsReducer,
	numberOfUsers: numberOfUsersReducer,
	pendingAids: pendingAidsReducer,
	pendingUsers: pendingUsersReducer,
	loggedUsersAids: loggedUsersAidsReducer,
	loggedUsersComments: LoggedUsersCommentsReducer,
	allUsers: allUsersReducer,
	allAids: allAidsReducer,
	pendingComments: pendingCommentsReducer,
	aidCategory: AidCategoryReducer,
	searchedAids: mapSearchAidReducer,
});

export default rootReducer;
