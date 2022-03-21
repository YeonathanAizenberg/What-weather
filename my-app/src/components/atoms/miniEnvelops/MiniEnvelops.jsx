import React from 'react';
import { Button } from 'react-bootstrap';
import './MiniEnvelops.css';

function MiniEnvelops({data, envelopsKey, handlingData}) {

    return (
        <>
            <Button onClick={() => handlingData(data,envelopsKey)} className="mini-envelops-button">
                {data}
            </Button>
        </>
    );
}

export default MiniEnvelops;