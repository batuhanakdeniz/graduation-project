import { combineReducers } from "redux";
import aidAidLocationReducer from "./reducers/aids/AddAidLocationReducer";
import aidAidPropertiesReducer from "./reducers/aids/AddAidPropertiesReducer";
import AidLocationReducer from "./reducers/aids/AidLocationReducer";
import detailContentReducer from "./reducers/aids/DetailContentReducer";
import popupContentReducer from "./reducers/aids/PopupContentReducer";
import numberOfAidsReducer from "./reducers/homepage/numberOfAidsReducer";
import numberOfHelpedAidsReducer from "./reducers/homepage/numberOfHelpedAidsReducer";
import numberOfUsersReducer from "./reducers/homepage/numberOfUsersReducer";
import loggedUserReducer from "./reducers/user/LoggedUserReducer";
import userLocationReducer from "./reducers/user/UserLocationReducer";

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
});

export default rootReducer;
