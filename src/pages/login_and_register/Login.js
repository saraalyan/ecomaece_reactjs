import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from '../my home/home';

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
        <div>
            {home ? <form onSubmit={handleLogin}>
                <h3>LogIn</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmaillog(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPasswordlog(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>

                {errors && <Alert color='primary' variant="warning" >
                    Fill correct Info else keep trying.
                        </Alert>}
            </form>
                : <Home />
            }

        </div>
    )
}

export default Login