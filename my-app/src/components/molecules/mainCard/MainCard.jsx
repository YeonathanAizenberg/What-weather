import React, { useEffect, useState } from 'react';
import ForeCastMiniCard from '../../atoms/foreCastMiniCard/ForeCastMiniCard';
import { averageTempFormatter, metricImperialTempFormatter } from '../../../utils/Utils';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as faHeartEmpty} from '@fortawesome/free-regular-svg-icons';
import { Button } from 'react-bootstrap';
import './MainCard.css';

function MainCard({data, foreCastData}) {
    const [favoriteCities, setFavoriteCities] = useState(JSON.parse(localStorage.getItem("favCity"))|| [])
    const [isFavorite, setIsFavorite] = useState(false)
    var locationCityName = localStorage.getItem("currentCityName") ? localStorage.getItem("currentCityName") : "Tel Aviv"

    const updateFavoriteCities = (newCity) => {
        const name = newCity.LocalizedName || "Tel Aviv"
        const temp = newCity.Temperature.Metric.Value
        const weather = newCity.WeatherText
        const newCityInfo = {name, temp, weather}
        setIsFavorite(true)
        localStorage.setItem("favCity", JSON.stringify(newCityInfo))
        setFavoriteCities(...favoriteCities, newCityInfo)
    }

    useEffect(
        () => {
            for (let i = 0; i < Array(favoriteCities)?.length; i++) {
                if(Array(favoriteCities)[i]?.name?.includes(locationCityName)) {
                    setIsFavorite(true)
                } 
            }
        },
        [],
    );

    return (
        <>
            <div className="data-container-box">
                <div className="data-box-header">
                    <div className="data-box-header-city-data">
                        <img src="tlv.webp" alt="cityPic"/>
                        <div>
                            <div>
                                {locationCityName}
                            </div> 
                            <div>
                                {metricImperialTempFormatter( 
                                    data?.Temperature.Metric.Value, 
                                    data?.Temperature.Metric.Unit 
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='add-to-favorites-wrapper'>
                        <div>
                            <FontAwesomeIcon icon={isFavorite ? faHeart : faHeartEmpty} fontSize={"4vh"}/>
                        </div>
                        <Button disabled={isFavorite} onClick={() => updateFavoriteCities(data)}>
                            Add To Favorites
                        </Button>
                    </div>
                </div>
                <div className="data-box-clouds">
                    <h1>
                        {data?.WeatherText}
                    </h1>
                </div>
                <div className="data-box-forecast-wrapper">
                    <div className="data-box-forecast">
                        {foreCastData?.DailyForecasts.map((day, index) => 
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
                </div>
            </div>
        </>
    );
}

export default MainCard;