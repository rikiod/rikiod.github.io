import React from 'react';
// If you have a CSS file for styling your Home component, import it here
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="heading-left">Hi, I'm Rikio Tsuyama-Dahlgren!</h1>
            <h1 className="heading-right">Welcome to my room.</h1>
            <p>This is my room, on the web! It's a work in progress.</p>
            {/* More content and components can be added here */}
        </div>
    );
};

export default Home;