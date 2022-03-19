import React, { useState } from 'react';
import ForeCastMiniCard from '../../atoms/foreCastMiniCard/ForeCastMiniCard';
import { averageTempFormatter, metricImperialTempFormatter } from '../../../utils/Utils';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as faHeartEmpty} from '@fortawesome/free-regular-svg-icons';
import { Button } from 'react-bootstrap';
import './MainCard.css';

function MainCard({data, foreCastData}) {
    const [favoriteCities, setFavoriteCities] = useState([localStorage.getItem("favCity")])
    var locationCityName = localStorage.getItem("currentCityName") ? localStorage.getItem("currentCityName") : "Tel Aviv"
    console.log("data",data)
    console.log("foreCastData",foreCastData.DailyForecasts)

    const updateFavoriteCities = (newCity) => {
        localStorage.setItem("favCity", [...favoriteCities, newCity])
        setFavoriteCities(...favoriteCities, newCity)
    }

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
                            <FontAwesomeIcon icon={faHeartEmpty} font-size={"4vh"}/>
                        </div>
                        <Button onClick={() => updateFavoriteCities("data.city")}>
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