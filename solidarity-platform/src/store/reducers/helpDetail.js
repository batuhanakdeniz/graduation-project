import {HELP_DETAIL} from '../type'

const helpDetailReducer = (state,action) => {
    switch (action.type){
        case HELP_DETAIL:    
            return state;
            break;
        default:
            return state;
    }

};

export default helpDetailReducer;