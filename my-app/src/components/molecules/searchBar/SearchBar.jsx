import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { locationCompleteSearch } from '../../../lib/api';
import { fetchSearchDataRequest, fetchSearchDataSuccess, fetchSearchDataError } from "../../../actions/searchData/action";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
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
        dispatch(fetchSearchDataRequest());
        locationCompleteSearch(city)
        .then(response => {
            dispatch(fetchSearchDataSuccess(response.data));
            handlingSearch(response)
        }).catch(error => {
            dispatch(fetchSearchDataError(error));
        })
    }

    const handlingSearch = (citiesArray) => {

        if(citiesArray.data) {
            if(citiesArray.data?.length > 1) {
                let moreThanOneCities = []
                for(let i = 0; i < citiesArray.data?.length; i++) {
                    const cityCountry = citiesArray.data[i].Country.LocalizedName
                    const cityName = citiesArray.data[i].LocalizedName
                    const cityKey = citiesArray.data[i].Key
                    moreThanOneCities.push({cityCountry,cityName,cityKey})  
                }
                setMultipleCities(moreThanOneCities)
                setDisplayMultipleCitiesModal(true)
            } else {
                localStorage.setItem("currentCityName", citiesArray.data[0]?.LocalizedName)
                localStorage.setItem("currentCityKey", citiesArray.data[0]?.Key)
                window.location.reload();
            }
        }
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