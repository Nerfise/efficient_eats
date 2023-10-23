import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../context/AuthContext';
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/users/login', { email, password })
      .then(() => {
        login();
        alert("You have successfully logged in!")
        navigate('/home')
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="text-center" style={{width: '100%', maxWidth: 500}}>
      <Card>
        <Card.Body>
          <Card.Title>Login to continue</Card.Title>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="Email">
              <Form.Control
                type="text"
                name="Email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Control
                type="password"
                name="Password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary w-100 mt-2" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;
 