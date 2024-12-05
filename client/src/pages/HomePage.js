import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/welcome'); // Redirects to login page
    };

    return (
        <div className="home-container">
            <div className="welcome-message">
                <h1>ExpenseBuddy</h1>
                <p>Manage your expenses in style. Start your journey towards financial elegance. Track, Manage, and Master Your Expenses with Ease!</p>
                <button onClick={handleGetStarted} className="get-started-btn">Get Started</button>
            </div>
        </div>
    );
};

export default HomePage;
