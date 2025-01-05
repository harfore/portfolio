import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './Projects';
import './Resume';
import './Contact'

export function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/projects">PROJECTS</Link></li>
                    <li><Link to="/resume">RESUME</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </nav>
        </header>
    )
}