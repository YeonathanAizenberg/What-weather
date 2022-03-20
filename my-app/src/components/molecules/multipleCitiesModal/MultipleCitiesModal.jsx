import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import MiniEnvelops from '../../atoms/miniEnvelops/MiniEnvelops';
import './MultipleCitiesModal.css';

function MultipleCitiesModal({show, onHide, data, cityToSearch}) {
console.log(data)
    return (
        <Modal
            show={show} 
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    We found more the one "{cityToSearch}"
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Select The Correct one</h4>
                <div>
                    {data.map((country, index) => 
                        <MiniEnvelops 
                            key={index}
                            data={country.cityCountry}
                            cityKey={country.cityCountryKey}
                        />
                    )}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MultipleCitiesModal;