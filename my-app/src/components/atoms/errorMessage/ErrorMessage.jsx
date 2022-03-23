import React from 'react';
import './ErrorMessage.css';

function ErrorMessage({status, procedure}) {

    return (
        <div className='error-message'>
            {status ? 
                <div>
                    Error Type: <u>{status}</u>
                </div>
                :
                null
            }
            <div>
                {procedure}
            </div>
        </div>
    );
}

export default ErrorMessage;