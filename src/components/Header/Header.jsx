import React, { useState } from 'react';
import { Container, Form, Button, Modal } from 'react-bootstrap';
import LoginForm from '../UserProfile/LoginForm';
import RegisterModal from '../UserProfile/RegisterModal';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false); 

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const handleShowRegisterModal = () => setShowRegisterModal(true); 
  const handleCloseRegisterModal = () => setShowRegisterModal(false); 

  return (
    <header className="p-3" style={{ backgroundColor: '#51807F', color: '#fff' }}>
      <Container>
        <div className="d-flex flex-wrap align-items-center justify-content-between" style={{ fontSize: '40px', fontWeight: 'bold', color: '#fff', fontFamily: '-moz-initial' }}>
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src="/Elementos/LOGO.png" alt="Logo" className="me-2" width="60" height="52" />
            VAMOAJUGAR
          </a>

          <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
          </Form>

          <div className="text-end">
            <Button variant="outline-light" className="me-2" onClick={handleShowLoginModal}>
              Login
            </Button>
            <Button variant="light" onClick={handleShowRegisterModal}>
              Sign-up
            </Button>
          </div>
        </div>
      </Container>

      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm onClose={handleCloseLoginModal} />
        </Modal.Body>
      </Modal>

      {/* Agrega el modal de registro */}
      <RegisterModal showModal={showRegisterModal} handleCloseModal={handleCloseRegisterModal} />
    </header>
  );
};

export default Header;

