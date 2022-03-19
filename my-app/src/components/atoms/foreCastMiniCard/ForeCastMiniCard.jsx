import React from 'react';
import { dayFormatter } from '../../../utils/Utils';
import './ForeCastMiniCard.css';

function ForeCastMiniCard({day, temp}) {

    return (
        <div className='card-wrapper'>
            <div>
                {dayFormatter(day)}
            </div>
            <div>
                {temp}
            </div>
        </div>
    );
}

export default ForeCastMiniCard;