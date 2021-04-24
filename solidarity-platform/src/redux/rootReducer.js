import { combineReducers } from 'redux'
import AidLocationReducer from './reducers/aids/AidLocationReducer'
import popupContentReducer from './reducers/aids/PopupContentReducer'

const rootReducer = combineReducers({
    aidLocations: AidLocationReducer,
    popupContent: popupContentReducer
})

export default rootReducer