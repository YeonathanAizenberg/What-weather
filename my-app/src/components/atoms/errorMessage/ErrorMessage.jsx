import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({status, procedure}) {

    return (
        <div className='error-message'>
            <div>
                Error Type: <u>{status}</u>
            </div>
            <div>
                {procedure}
            </div>
        </div>
    );
}

export default ErrorMessage;