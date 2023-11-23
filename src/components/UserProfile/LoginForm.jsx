import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './LoginForm.css';

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de inicio de sesión, por ejemplo, enviar datos a una API
    // Lógica para autenticar al usuario
    console.log('Username:', username);
    console.log('Password:', password);

    // Muestra la alerta en caso de error de inicio de sesión (simulado)
    setShowAlert(true);
  };

  return (
    <>
      <div className='login-form'> 
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Login
          </Button>
        </Form>

        {showAlert && (
          <Alert variant="danger" className="mt-3">
            Incorrect username or password. Please try again.
          </Alert>
        )}

        <div className="text-center mt-3">
          <p>If you don't have an account, <a href="#">register here</a>.</p>
        </div>

        <div className="text-center mt-3">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;