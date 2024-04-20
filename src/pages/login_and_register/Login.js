import React, { useState } from 'react'
import { Alert, Form, Button, Container } from 'react-bootstrap';
import Home from '../my home/home';
import './login.css'; // Import your custom CSS file

function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");
    const [errors, seterrors] = useState(false);
    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('password');
        let mail = localStorage.getItem('email');
        if (!emaillog || !passwordlog) {
          seterrors(true);
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
          seterrors(true);
        } else {
            setHome(!home);
            seterrors(false);
        }
    }

    return (
        <div className="login-container">
          <div className="login-card"> 

            {home ? <Form onSubmit={handleLogin} className="login-form">
                <h3>LogIn</h3>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                </Form.Group>

                <Button type="submit" variant="dark" className="btn btn-dark btn-lg btn-block">Login</Button>

                {errors && <Alert variant="warning" className="alert">
                    Fill correct Info else keep trying.
                        </Alert>}
            </Form>
                : <Home />
            }
                </div>
        </div>
    )
}

export default Login;
