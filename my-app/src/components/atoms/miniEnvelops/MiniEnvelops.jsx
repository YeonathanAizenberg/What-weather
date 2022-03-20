import React from 'react';
import { Button } from 'react-bootstrap';
import './MiniEnvelops.css';

function MiniEnvelops({data, cityKey}) {

    const handlingData = () => {
        localStorage.setItem("currentCityKey", cityKey)
        localStorage.setItem("currentCityName", data)
        window.location.reload();
    }

    return (
        <>
            <Button onClick={handlingData} className="mini-envelops-button">
                {data}
            </Button>
        </>
    );
}

export default MiniEnvelops;