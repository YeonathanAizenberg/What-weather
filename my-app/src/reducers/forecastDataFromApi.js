let initialState = {
    loading: true,
    data: [
        {
            "isTheMockForeCastDataState": true,
            "Headline": {
                "EffectiveDate": "2022-03-23T19:00:00+02:00",
                "EffectiveEpochDate": 1648054800,
                "Severity": 3,
                "Text": "Expect rainy weather Wednesday evening through Thursday evening",
                "Category": "rain",
                "EndDate": "2022-03-25T01:00:00+02:00",
                "EndEpochDate": 1648162800,
                "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us",
                "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us"
            },
            "DailyForecasts": [
                {
                    "Date": "2022-03-21T07:00:00+02:00",
                    "EpochDate": 1647838800,
                    "Temperature": {
                        "Minimum": {
                            "Value": 49,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 59,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 3,
                        "IconPhrase": "Partly sunny",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 38,
                        "IconPhrase": "Mostly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us"
                },
                {
                    "Date": "2022-03-22T07:00:00+02:00",
                    "EpochDate": 1647925200,
                    "Temperature": {
                        "Minimum": {
                            "Value": 50,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 59,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 3,
                        "IconPhrase": "Partly sunny",
                        "HasPrecipitation": false
                    },
                    "Night": {
                        "Icon": 34,
                        "IconPhrase": "Mostly clear",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us"
                },
                {
                    "Date": "2022-03-23T07:00:00+02:00",
                    "EpochDate": 1648011600,
                    "Temperature": {
                        "Minimum": {
                            "Value": 54,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 58,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 14,
                        "IconPhrase": "Partly sunny w/ showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Night": {
                        "Icon": 12,
                        "IconPhrase": "Showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us"
                },
                {
                    "Date": "2022-03-24T07:00:00+02:00",
                    "EpochDate": 1648098000,
                    "Temperature": {
                        "Minimum": {
                            "Value": 52,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 58,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 18,
                        "IconPhrase": "Rain",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 40,
                        "IconPhrase": "Mostly cloudy w/ showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Moderate"
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us"
                },
                {
                    "Date": "2022-03-25T07:00:00+02:00",
                    "EpochDate": 1648184400,
                    "Temperature": {
                        "Minimum": {
                            "Value": 55,
                            "Unit": "F",
                            "UnitType": 18
                        },
                        "Maximum": {
                            "Value": 59,
                            "Unit": "F",
                            "UnitType": 18
                        }
                    },
                    "Day": {
                        "Icon": 13,
                        "IconPhrase": "Mostly cloudy w/ showers",
                        "HasPrecipitation": true,
                        "PrecipitationType": "Rain",
                        "PrecipitationIntensity": "Light"
                    },
                    "Night": {
                        "Icon": 35,
                        "IconPhrase": "Partly cloudy",
                        "HasPrecipitation": false
                    },
                    "Sources": [
                        "AccuWeather"
                    ],
                    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us",
                    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us"
                }
            ]
        }
    ],
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