import { combineReducers } from 'redux';
import getDataFromAPIReducer from './dataFromApi';

const allReducers = combineReducers({
    getData : getDataFromAPIReducer
})

export default allReducers;