import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className='login-register' style={{ textAlign: 'center', marginTop: '50px', backgroundColor:"rgba(0, 0, 0, 0.5)", padding:'70px', borderRadius:'20px' }}>
        <h1 style={{marginBottom:'50px'}}>Welcome to ExpenseBuddy</h1>
        <div style={{marginBottom:'50px', fontSize:'17px'}}>
            <p>Start your journey to financial freedom - Log in or Sign up now and take control of your expenses in style!</p>
        </div>
        <div className='login-register-btn'>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/register"><button>Register</button></Link>
        </div>
    </div>
);

export default Home;
