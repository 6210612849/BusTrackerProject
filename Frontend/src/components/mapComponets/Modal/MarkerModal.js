import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MarkerModal(props) {
    const [show, setShow] = useState(true)
    const handleClose = () => {
        setShow(false)
        props.setShowClose()
        
    };
    const handleShow = () => setShow(true);

    useEffect(() => {
        console.log("call MarkerModal")
        console.log(props.info)
    },[])
    return (show) ? (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Marker info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>this is marker info {props.info.value.bsid}</h5>
                    <p>lat:{props.info.value.lat} lng:{props.info.value.lng}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {props.setSelectedBusStop(props.info.value)}}>
                        "Select this bus stop"
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
            
        </>
    ) : null;
}

export default MarkerModal