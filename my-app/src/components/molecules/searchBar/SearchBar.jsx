import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { locationCompleteSearch } from '../../../lib/api';
import { fetchSearchDataRequest, fetchSearchDataSuccess, fetchSearchDataError } from "../../../actions/searchData/action";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import './SearchBar.css';
import MultipleCitiesModal from '../multipleCitiesModal/MultipleCitiesModal';

function SearchBar() {
    const dispatch = useDispatch();
    const [city,setCity] = useState("Tel Aviv");
    const [multipleCities,setMultipleCities] = useState([]);
    const [displayMultipleCitiesModal, setDisplayMultipleCitiesModal] = useState(false);
    
    const searchCityWeatherInfo = () => {
        dispatch(fetchSearchDataRequest());
        locationCompleteSearch(city)
        .then(response => {
            dispatch(fetchSearchDataSuccess(response.data));
            console.log(response.data)
            if(response?.data.length > 1) {
                let moreThanOneCities = []
                for(let i = 0; i < response?.data.length; i++) {
                    const cityCountry = response.data[i].Country.LocalizedName
                    const cityCountryKey = response.data[i].Key
                    moreThanOneCities.push({cityCountry,cityCountryKey})  
                }
                setMultipleCities(moreThanOneCities)
                setDisplayMultipleCitiesModal(true)
            } else {
                localStorage.setItem("currentCityKey", response.data.key)
                localStorage.setItem("currentCityName", response.data.LocalizedName)
                window.location.reload();
            }
        }).catch(error => {
            dispatch(fetchSearchDataError(error));
        })
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
                    placeholder='Search City...'
                    className='search-input'
                    type="text" 
                    onChange={e => setCity(e.target.value)}
                />
            </div>
            <MultipleCitiesModal 
                show={displayMultipleCitiesModal}
                onHide={() => setDisplayMultipleCitiesModal(false)}
                data={multipleCities}
                cityToSearch={city}
            />
        </>
    );
}

export default SearchBar;