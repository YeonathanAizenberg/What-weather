import React from 'react';
import { Button } from 'react-bootstrap';
import './MiniEnvelops.css';

function MiniEnvelops({country, cityName, envelopsKey, handlingData}) {

    return (
        <>
            <Button onClick={() => handlingData(cityName, envelopsKey)} className="mini-envelops-button">
                {cityName} - {country}
            </Button>
        </>
    );
}

export default MiniEnvelops;