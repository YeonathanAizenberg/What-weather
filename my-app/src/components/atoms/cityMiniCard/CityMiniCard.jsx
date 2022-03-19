import React from 'react';
import './CityMiniCard.css';

function CityMiniCard({city, temp, weather}) {

    return (
        <div className='city-card'>
            <div>
                <div>
                    {city}
                </div>
                <div>
                    {temp}
                </div>
            </div>
            <div>
                {weather}
            </div>
        </div>
    );
}

export default CityMiniCard;