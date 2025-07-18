import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about-container">
            <h1>about me</h1>
            <p>Hi! I'm a software engineer based in the Bay Area, with a background in Computer Science and Public Health from UC Berkeley.</p>
            <p>I like jumping into difficult problems, and finding simple but effective fixes.</p>
            <p>Let's talk! Shoot me at message at rikio [@] berkeley [.] edu</p>
        </div>
    );
};

export default About;
