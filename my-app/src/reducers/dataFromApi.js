let initialState = {
    loading: true,
    data: [{
        "isTheMockDataState": true,
        "LocalObservationDateTime": "2022-03-18T22:37:00+02:00",
        "EpochTime": 1647635820,
        "WeatherText": "Some clouds",
        "WeatherIcon": 36,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": false,
        "Temperature": {
            "Metric": {
                "Value": 13.8,
                "Unit": "C",
                "UnitType": 17
            },
            "Imperial": {
                "Value": 57.0,
                "Unit": "F",
                "UnitType": 18
            }
        },
        "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    }],
    error: null
};

const dataFromApi = (state = initialState, action) => {
    var {data} = state;
    switch (action.type) {
        case "FETCH_DATA_REQUEST":
            return {
                ...state.data,
                loading: true,
                error: null
            };
        case "FETCH_DATA_SUCCESS":
            return {
                ...state.data,
                loading: false,
                data: action.data
            };
        case "FETCH_DATA_ERROR":
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

export default dataFromApi