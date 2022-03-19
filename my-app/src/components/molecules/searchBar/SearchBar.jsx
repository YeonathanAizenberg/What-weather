import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { locationCompleteSearch } from '../../../lib/api';
import { fetchSearchDataRequest, fetchSearchDataSuccess, fetchSearchDataError } from "../../../actions/searchData/action";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
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
        //     localStorage.setItem("currentCityName", response.data.LocalizedName)
        // }).catch(error => {
        //     dispatch(fetchSearchDataError(error));
        // })
    }

    return (
        <>
            <div className='search-wrapper'>
                <Button 
                    variant="outline-primary"
                    onClick={searchCityWeatherInfo}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
                <input 
                    className='search-input'
                    type="text" 
                    onChange={e => setCity(e.target.value)}
                />
            </div>
            
        </>
    );
}

export default SearchBar;