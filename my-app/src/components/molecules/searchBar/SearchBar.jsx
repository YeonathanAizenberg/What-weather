import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { locationCompleteSearch } from '../../../lib/api';
import { fetchSearchDataRequest, fetchSearchDataSuccess, fetchSearchDataError } from "../../../actions/searchData/action";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Button, Spinner } from 'react-bootstrap';
import MultipleCitiesModal from '../multipleCitiesModal/MultipleCitiesModal';
import ErrorMessage from '../../atoms/errorMessage/ErrorMessage';
import './SearchBar.css';

function SearchBar() {
    const dispatch = useDispatch();
    const [city,setCity] = useState("Tel Aviv");
    const [multipleCities,setMultipleCities] = useState([]);
    const [displayMultipleCitiesModal, setDisplayMultipleCitiesModal] = useState(false);
    const searchDataError = useSelector(state => state?.getSearchData.error)

    const searchCityWeatherInfo = () => {
        // dispatch(fetchSearchDataRequest());
        // locationCompleteSearch(city)
        // .then(response => {
        //     dispatch(fetchSearchDataSuccess(response.data));
        //     if(response?.data.length > 1) {
        //         let moreThanOneCities = []
        //         for(let i = 0; i < response?.data.length; i++) {
        //             const cityCountry = response.data[i].Country.LocalizedName
        //             const cityCountryKey = response.data[i].Key
        //             moreThanOneCities.push({cityCountry,cityCountryKey})  
        //         }
        //         setMultipleCities(moreThanOneCities)
        //         setDisplayMultipleCitiesModal(true)
        //     } else {
        //         localStorage.setItem("currentCityName", response?.data.Country.LocalizedName)
        //         localStorage.setItem("currentCityKey", response?.data.Key)
        //         window.location.reload();
        //     }
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
                    placeholder='Search City...'
                    className='search-input'
                    type="text" 
                    onChange={e => setCity(e.target.value)}
                />
            </div>
            {searchDataError !== null ? 
                <ErrorMessage
                    status={searchDataError?.message} 
                    procedure={"Your data wasn't found, try to search again"}
                />
                :
                null
            }
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