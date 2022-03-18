import {
    FETCH_SEARCH_DATA_REQUEST,
    FETCH_SEARCH_DATA_SUCCESS,
    FETCH_SEARCH_DATA_ERROR
} from "./actionType";

export function fetchSearchDataRequest() {
    return {
        type: FETCH_SEARCH_DATA_REQUEST
    };
}

export function fetchSearchDataSuccess(data) {
    return {
        type: FETCH_SEARCH_DATA_SUCCESS,
        data
    };
}

export function fetchSearchDataError(error) {
    return {
        type: FETCH_SEARCH_DATA_ERROR,
        payload: { error }
    };
}