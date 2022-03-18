import {
    FETCH_FORECAST_DATA_REQUEST,
    FETCH_FORECAST_DATA_SUCCESS,
    FETCH_FORECAST_DATA_ERROR
} from "./actionType";

export function fetchForecastDataRequest() {
    return {
        type: FETCH_FORECAST_DATA_REQUEST
    };
}

export function fetchForecastDataSuccess(data) {
    return {
        type: FETCH_FORECAST_DATA_SUCCESS,
        data
    };
}

export function fetchForecastDataError(error) {
    return {
        type: FETCH_FORECAST_DATA_ERROR,
        payload: { error }
    };
}