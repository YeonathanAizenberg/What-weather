const oneOptCountryMockData = () => {
    return ({
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
    })
}

const moreTheOneOptCountryMockData = () => {
    return (
        [{
            "isTheMockSearchDataState": true,
            "Version": 1,
            "Key": "308526",
            "Type": "City",
            "Rank": 10,
            "LocalizedName": "Madrid",
            "Country": {
                "ID": "ES",
                "LocalizedName": "Spain"
            },
            "AdministrativeArea": {
                "ID": "MD",
                "LocalizedName": "Madrid"
            }
        },
        {
            "Version": 1,
            "Key": "108179",
            "Type": "City",
            "Rank": 55,
            "LocalizedName": "Madrid",
            "Country": {
                "ID": "CO",
                "LocalizedName": "Colombia"
            },
            "AdministrativeArea": {
                "ID": "CUN",
                "LocalizedName": "Cundinamarca"
            }
        },
        {
            "Version": 1,
            "Key": "262718",
            "Type": "City",
            "Rank": 55,
            "LocalizedName": "Madridejos",
            "Country": {
                "ID": "PH",
                "LocalizedName": "Philippines"
            },
            "AdministrativeArea": {
                "ID": "CEB",
                "LocalizedName": "Cebu"
            }
        },
        {
            "Version": 1,
            "Key": "303860",
            "Type": "City",
            "Rank": 62,
            "LocalizedName": "Madridejos",
            "Country": {
                "ID": "ES",
                "LocalizedName": "Spain"
            },
            "AdministrativeArea": {
                "ID": "CM",
                "LocalizedName": "Castile-La Mancha"
            }
        },
        {
            "Version": 1,
            "Key": "266174",
            "Type": "City",
            "Rank": 65,
            "LocalizedName": "Madrid",
            "Country": {
                "ID": "PH",
                "LocalizedName": "Philippines"
            },
            "AdministrativeArea": {
                "ID": "SUR",
                "LocalizedName": "Surigao del Sur"
            }
        },
        {
            "Version": 1,
            "Key": "3415106",
            "Type": "City",
            "Rank": 75,
            "LocalizedName": "Madridejos",
            "Country": {
                "ID": "PH",
                "LocalizedName": "Philippines"
            },
            "AdministrativeArea": {
                "ID": "CEB",
                "LocalizedName": "Cebu"
            }
        },
        {
            "Version": 1,
            "Key": "1457495",
            "Type": "City",
            "Rank": 82,
            "LocalizedName": "Madridanos",
            "Country": {
                "ID": "ES",
                "LocalizedName": "Spain"
            },
            "AdministrativeArea": {
                "ID": "CL",
                "LocalizedName": "Castile and Leon"
            }
        },
        {
            "Version": 1,
            "Key": "3387039",
            "Type": "City",
            "Rank": 85,
            "LocalizedName": "Madrid",
            "Country": {
                "ID": "CA",
                "LocalizedName": "Canada"
            },
            "AdministrativeArea": {
                "ID": "SK",
                "LocalizedName": "Saskatchewan"
            }
        },
        {
            "Version": 1,
            "Key": "2328920",
            "Type": "City",
            "Rank": 85,
            "LocalizedName": "Madrid",
            "Country": {
                "ID": "ES",
                "LocalizedName": "Spain"
            },
            "AdministrativeArea": {
                "ID": "AN",
                "LocalizedName": "Andalusia"
            }
        },
        {
            "Version": 1,
            "Key": "237575",
            "Type": "City",
            "Rank": 85,
            "LocalizedName": "Madrid",
            "Country": {
                "ID": "MX",
                "LocalizedName": "Mexico"
            },
            "AdministrativeArea": {
                "ID": "COL",
                "LocalizedName": "Colima"
            }
        }]
    )
}

let initialState = {
    loading: true,
    data: [oneOptCountryMockData()],
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