import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <h1 className="heading-left">Hi, I'm Rikio!</h1>
            <h1 className="heading-right">Welcome to my room.</h1>
            <p>This is my room, on the web! It's a work in progress.</p>
        </div>
    );
};

export default Home;