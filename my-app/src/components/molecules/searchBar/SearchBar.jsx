import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { locationCompleteSearch } from '../../../lib/api';
import { fetchSearchDataRequest, fetchSearchDataSuccess, fetchSearchDataError } from "../../../actions/searchData/action";
import './SearchBar.css';

function SearchBar() {
    const dispatch = useDispatch();
    const [city,setCity] = useState("Tel Aviv");
    
    const searchCityWeatherInfo = () => {
        console.log(city)
        // dispatch(fetchSearchDataRequest());
        // locationCompleteSearch(city)
        // .then(response => {
        //     dispatch(fetchSearchDataSuccess(response.data));
        //     localStorage.setItem("currentCityKey", response.data.key)
        // }).catch(error => {
        //     dispatch(fetchSearchDataError(error));
        // })
    }

    return (
        <>
            <h6>Search</h6>
            <button
                onClick={searchCityWeatherInfo}
            >
                Icon For Search
            </button>
            <input 
                type="text" 
                onChange={e => setCity(e.target.value)}
            />
        </>
    );
}

export default SearchBar;