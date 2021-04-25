import { combineReducers } from 'redux'
import aidAidLocationReducer from './reducers/aids/AddAidLocationReducer'
import AidLocationReducer from './reducers/aids/AidLocationReducer'
import detailContentReducer from './reducers/aids/DetailContentReducer'
import popupContentReducer from './reducers/aids/PopupContentReducer'

const rootReducer = combineReducers({
    aidLocations: AidLocationReducer,
    popupContent: popupContentReducer,
    addAidLocation: aidAidLocationReducer,
    detailContent: detailContentReducer
})

export default rootReducer