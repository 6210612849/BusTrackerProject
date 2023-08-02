import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function InfoModal(props) {
    const [show, setShow] = useState(true)
    const handleClose = () => {
        setShow(false)
        props.setShow()
    };
    const handleShow = () => setShow(true);

    /* useEffect(() => {
        setShow(props.show)
        console.log("show?:", show)
    },[]) */

    return (show && (props.arrivalTime !== undefined)) ? (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Arrival Time</Modal.Title>
                </Modal.Header>
                <Modal.Body>arrival time is {props.arrivalTime} minute</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        OK
                    </Button>

                </Modal.Footer>
            </Modal>
            {console.log(show)}
        </>
    ) : <>nothing here</>;
}

export default InfoModal