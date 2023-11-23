import React from 'react';
import { Form, Button } from 'react-bootstrap';

const RegisterForm = ({ onClose }) => {
  const handleRegister = (e) => {
    e.preventDefault();
    onClose(); 
  };

  return (
    <Form onSubmit={handleRegister}>

      <Form.Group controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formBasicPasswordRepeat">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control type="password" placeholder="Repeat password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;