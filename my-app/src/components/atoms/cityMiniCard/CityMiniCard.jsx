import React from 'react';
import { Button } from 'react-bootstrap';
import { metricImperialTempFormatter } from '../../../utils/Utils';
import './CityMiniCard.css';

function CityMiniCard({selectCard, removeCard, cityKey, city, weather, weatherUnit, temp }) {

    return (
        <div className='city-card'>
            <Button onClick={()=> removeCard(cityKey)}>
                Remove From Favorites
            </Button>
            <div>
                <div>
                    {city}
                </div>
                <div>
                    {metricImperialTempFormatter(temp, weatherUnit)}
                </div>
            </div>
            <div>
                {weather}
            </div>
            <Button onClick={()=> selectCard(cityKey,city)}>
                Go to City Page
            </Button>
        </div>
    );
}

export default CityMiniCard;