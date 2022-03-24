let initialState = {
    loading: true,
    data: [],
    error: null
};

const forecastDataFromApi = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_FORECAST_DATA_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_FORECAST_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case "FETCH_FORECAST_DATA_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                data: []
            };
        default:
            return state
    }
};

export default forecastDataFromApi