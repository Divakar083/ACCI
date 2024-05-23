import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RequestCallBackModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Request Call Back</Modal.Title>
      </Modal.Header>
      <Modal.Body>Success! We will get back to you soon.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RequestCallBackModal;
