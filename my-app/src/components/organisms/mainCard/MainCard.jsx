import React, { useEffect, useState } from 'react';
import ForeCastMiniCard from '../../atoms/foreCastMiniCard/ForeCastMiniCard';
import { averageTempFormatter, checkIfCityIsFavorite, favCityEmptySpot, metricImperialTempFormatter } from '../../../utils/Utils';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as faHeartEmpty} from '@fortawesome/free-regular-svg-icons';
import { Button, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ErrorMessage from '../../atoms/errorMessage/ErrorMessage';
import './MainCard.css';

function MainCard({data, foreCastData}) {

    const [isFavorite, setIsFavorite] = useState(false)
    const [dataLoaded, setDataLoaded] = useState(false)
    const [weatherIcon, setWeatherIcon] = useState("https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/36-s.png")
    const loading = useSelector(state => state?.getData.loading)
    const dataError = useSelector(state => state?.getData.error)
    const foreCastDataError = useSelector(state => state?.getForeCastData.error)
    var locationCityName = localStorage.getItem("currentCityName") ? localStorage.getItem("currentCityName") : "Tel Aviv"
    var locationCityKey = localStorage.getItem("currentCityKey") ? localStorage.getItem("currentCityKey") : "215854"; // Tel Aviv Key-Code

    const newCityObj = (newCity) => {
        const name = locationCityName;
        const temp = newCity.Temperature.Metric.Value;
        const weather = newCity.WeatherText;
        const cityKey = locationCityKey;
        const newCityInfo = {name, temp, weather, cityKey}
        return newCityInfo
    }

    const updateFavoriteCities = (newCity) => {
        const newCityInfo = newCityObj(newCity)
        if(favCityEmptySpot() !== undefined) {
            setIsFavorite(true)    
            localStorage.setItem(favCityEmptySpot(), JSON.stringify(newCityInfo))
        }
    }

    useEffect(
        () => 
            {
                setIsFavorite(checkIfCityIsFavorite(locationCityKey))
                const currentWeatherIcon = data?.data[0].WeatherIcon
                setWeatherIcon(`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${currentWeatherIcon}-s.png`)
            },
        [],
    );

    useEffect(
        () => {
            loading == true ? 
            setDataLoaded(false) : setDataLoaded(true)
        },
        [loading],
    );

    return (
        <>
        {dataLoaded ? 
            <div className="data-container-box">
                <div className="data-box-header">
                    <div className="data-box-header-city-data">
                        <img src={weatherIcon} alt="weatherIcon"/>
                        {dataError === null && loading?
                            <div>
                                <div>
                                    {locationCityName}
                                </div> 
                                <div>
                                    {metricImperialTempFormatter( 
                                        data?.data[0]?.Temperature?.Metric?.Value, 
                                        data?.data[0]?.Temperature?.Metric?.Unit 
                                    )}
                                </div>
                            </div>
                            :
                            <ErrorMessage 
                                status={dataError?.message} 
                                procedure={" Your data wasn't found, try to search again"}
                            />
                        }
                    </div>
                    <div className='add-to-favorites-wrapper'>
                        <div>
                            <FontAwesomeIcon icon={isFavorite ? faHeart : faHeartEmpty} fontSize={"4vh"}/>
                        </div>
                        <Button disabled={isFavorite} onClick={() => updateFavoriteCities(data.data[0])}>
                            Add To Favorites
                        </Button>
                    </div>
                </div>
                <div className="data-box-clouds">
                    <h1>
                        {data?.data[0]?.WeatherText}
                    </h1>
                </div>
                <div className="data-box-forecast-wrapper">
                {foreCastDataError === null && loading?
                    <div className="data-box-forecast">
                        {foreCastData.data?.DailyForecasts?.map((day, index) => 
                            <ForeCastMiniCard 
                                key={index} 
                                day={day.Date} 
                                temp={
                                    averageTempFormatter(
                                        day.Temperature.Maximum.Value,
                                        day.Temperature.Minimum.Value,
                                        day.Temperature.Maximum.Unit
                                    )
                                }
                            />
                        )}
                    </div>
                    :
                    <ErrorMessage 
                        status={foreCastDataError?.message} 
                        procedure={"Your data wasn't found, try to search again"}
                    />
                }
                </div>
            </div>
            :
            <Spinner animation="grow" variant="primary" />
            }
        </>
    );
}

export default MainCard;