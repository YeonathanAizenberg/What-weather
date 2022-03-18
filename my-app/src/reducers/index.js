import { combineReducers } from 'redux';
import getDataFromAPIReducer from './dataFromApi';
import getForecastDataFromAPIReducer from './forecastDataFromApi';
import getSearchDataFromAPIReducer from './searchDataFromApi';

const allReducers = combineReducers({
    getData : getDataFromAPIReducer,
    getForeCastData : getForecastDataFromAPIReducer,
    getSearchData : getSearchDataFromAPIReducer,
})

export default allReducers;