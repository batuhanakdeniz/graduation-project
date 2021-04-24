import helpBasicReducer from './helpBasic';
import helpDetailReducer from './helpDetail';
import {combineReducers} from 'redux';

const helpReducers = combineReducers({
    helpBasicInfo: helpBasicReducer,
    helpDetailInfo: helpDetailReducer
});

export default helpReducers;