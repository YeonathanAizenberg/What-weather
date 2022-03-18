let initialState = {
    loading: false,
    data: [{
        "isTheMockSearchDataState": true,
        "Version": 1,
        "Key": "215854",
        "Type": "City",
        "Rank": 31,
        "LocalizedName": "Tel Aviv",
        "Country": {
            "ID": "IL",
            "LocalizedName": "Israel"
        },
        "AdministrativeArea": {
            "ID": "TA",
            "LocalizedName": "Tel Aviv"
        }
    }],
    error: null
};

const searchDataFromApi = (state = initialState, action) => {
    var { data } = state;

    switch (action.type) {
        case "FETCH_SEARCH_DATA_REQUEST":
            return {
                ...state.data,
                loading: true,
                error: null
            };
        case "FETCH_SEARCH_DATA_SUCCESS":
            return {
                ...state.data,
                loading: false,
                data: action.data
            };
        case "FETCH_SEARCH_DATA_ERROR":
            return {
                ...state.data,
                loading: false,
                error: action.payload.error,
                data: []
            };
        default:
            return state
    }
};

export default searchDataFromApi