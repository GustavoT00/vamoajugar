import React from 'react';
import { Modal } from 'react-bootstrap';
import RegisterForm from './RegisterForm';
import './RegisterForm.css';

const RegisterModal = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='register-form'>
            <RegisterForm onClose={handleCloseModal} />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;