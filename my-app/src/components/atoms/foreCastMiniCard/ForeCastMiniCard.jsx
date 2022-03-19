import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
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