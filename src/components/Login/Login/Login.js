import React from 'react';
import useAuth from './../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Login.css'
import googleLogo from '../../../images/google-logo.png';
import { Image } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri);
        })
    }

    return (
        <div className="App container">
            <div>
            <img src={logo} style={{height:'150px', width:'300px'}} className="my-5"/>  <br />
            </div>
            <button onClick={handleGoogleLogin} className="btn my-3">   
            < div className="google-singin-page">
            <Image src={googleLogo} fluid />
            </div>
            </button>

        </div>
    );
};

export default Login;