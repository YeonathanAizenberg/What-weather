let initialState = {
    loading: true,
    data: [],
    error: null
};

const dataFromApi = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case "FETCH_DATA_ERROR":
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

export default dataFromApi