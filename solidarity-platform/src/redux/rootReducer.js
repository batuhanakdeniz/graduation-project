import { combineReducers } from "redux";
import aidAidLocationReducer from "./reducers/aids/AddAidLocationReducer";
import AidLocationReducer from "./reducers/aids/AidLocationReducer";
import detailContentReducer from "./reducers/aids/DetailContentReducer";
import popupContentReducer from "./reducers/aids/PopupContentReducer";
import loggedUserReducer from "./reducers/user/LoggedUserReducer";
import registrationTypeReducer from "./reducers/registration/registrationTypeReducer";
import userLocationReducer from "./reducers/user/UserLocationReducer";

const rootReducer = combineReducers({
	aidLocations: AidLocationReducer,
	popupContent: popupContentReducer,
	addAidLocation: aidAidLocationReducer,
	detailContent: detailContentReducer,
	userData: loggedUserReducer,
	registrationType: registrationTypeReducer,
	userLocation: userLocationReducer,
});
 
export default rootReducer;
