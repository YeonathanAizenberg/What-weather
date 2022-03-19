let initialState = {
    loading: false,
    data: [{
        "Headline": {
            "EffectiveDate": "2022-03-23T01:00:00+02:00",
            "EffectiveEpochDate": 1647990000,
            "Severity": 2,
            "Text": "Expect showery weather late Tuesday night through Wednesday morning",
            "Category": "rain",
            "EndDate": "2022-03-23T13:00:00+02:00",
            "EndEpochDate": 1648033200,
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
        },
        "DailyForecasts": [
            {
                "Date": "2022-03-19T07:00:00+02:00",
                "EpochDate": 1647666000,
                "Temperature": {
                    "Minimum": {
                        "Value": 10.4,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 16.9,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 6,
                    "IconPhrase": "Mostly cloudy",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 38,
                    "IconPhrase": "Mostly cloudy",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
            },
            {
                "Date": "2022-03-20T07:00:00+02:00",
                "EpochDate": 1647752400,
                "Temperature": {
                    "Minimum": {
                        "Value": 8.8,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 13.4,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 6,
                    "IconPhrase": "Mostly cloudy",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 7,
                    "IconPhrase": "Cloudy",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
            },
            {
                "Date": "2022-03-21T07:00:00+02:00",
                "EpochDate": 1647838800,
                "Temperature": {
                    "Minimum": {
                        "Value": 9.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 14.2,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 2,
                    "IconPhrase": "Mostly sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 7,
                    "IconPhrase": "Cloudy",
                    "HasPrecipitation": false
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
            },
            {
                "Date": "2022-03-22T07:00:00+02:00",
                "EpochDate": 1647925200,
                "Temperature": {
                    "Minimum": {
                        "Value": 9.2,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 14.9,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 3,
                    "IconPhrase": "Partly sunny",
                    "HasPrecipitation": false
                },
                "Night": {
                    "Icon": 12,
                    "IconPhrase": "Showers",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Heavy"
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
            },
            {
                "Date": "2022-03-23T07:00:00+02:00",
                "EpochDate": 1648011600,
                "Temperature": {
                    "Minimum": {
                        "Value": 8.4,
                        "Unit": "C",
                        "UnitType": 17
                    },
                    "Maximum": {
                        "Value": 13.8,
                        "Unit": "C",
                        "UnitType": 17
                    }
                },
                "Day": {
                    "Icon": 13,
                    "IconPhrase": "Mostly cloudy w/ showers",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Moderate"
                },
                "Night": {
                    "Icon": 18,
                    "IconPhrase": "Rain",
                    "HasPrecipitation": true,
                    "PrecipitationType": "Rain",
                    "PrecipitationIntensity": "Light"
                },
                "Sources": [
                    "AccuWeather"
                ],
                "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
            }
        ]
    }],
    error: null
};

const forecastDataFromApi = (state = initialState, action) => {
    var { data } = state;

    switch (action.type) {
        case "FETCH_FORECAST_DATA_REQUEST":
            return {
                ...state.data,
                loading: true,
                error: null
            };
        case "FETCH_FORECAST_DATA_SUCCESS":
            return {
                ...state.data,
                loading: false,
                data: action.data
            };
        case "FETCH_FORECAST_DATA_ERROR":
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

export default forecastDataFromApi