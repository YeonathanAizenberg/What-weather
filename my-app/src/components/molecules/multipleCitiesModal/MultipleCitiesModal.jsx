import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import MiniEnvelops from '../../atoms/miniEnvelops/MiniEnvelops';
import './MultipleCitiesModal.css';

function MultipleCitiesModal({show, onHide, data, cityToSearch}) {

    const handlingData = (name, key) => {
        localStorage.setItem("currentCityName", name)
        localStorage.setItem("currentCityKey", key)
        window.location.reload();
    }

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
                            country={country.cityCountry}
                            cityName={country.cityName}
                            envelopsKey={country.cityKey}
                            handlingData={handlingData}
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