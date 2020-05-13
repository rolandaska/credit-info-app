import { combineReducers } from 'redux';
import getPersonInfoReducer from './getPersonInfo-reducer';
import getAffordabilityReducer from './getAffordability-reducer';
import getExposureReducer from './getExposure-reducer';

export default combineReducers({
    getPersonInfoReducer,
    getAffordabilityReducer,
    getExposureReducer,
});
