import helpBasicReducer from './helpBasic';
import helpDetailReducer from './helpDetails';
import {combineReducers} from 'redux';

const helpReducers = combineReducers({
    helpBasicInfo: helpBasicReducer,
    helpDetailInfo: helpDetailReducer
});

export default helpReducers;