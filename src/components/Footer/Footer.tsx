import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <hr></hr> 
            <p className="level0">index</p>
            <p className="level1">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? 'active' : undefined}
                >
                    home
                </NavLink>
            </p>
            <p className="level1">
                <NavLink 
                    to="/projects" 
                    className={({ isActive }) => isActive ? 'active' : undefined}
                >
                    projects
                </NavLink>
            </p>
            <p className="level1">
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => isActive ? 'active' : undefined}
                >
                    about
                </NavLink>
            </p>

            {/* more links */}

        </div>
    );
};

export default Footer;
