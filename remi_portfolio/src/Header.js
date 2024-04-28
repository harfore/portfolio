import React from 'react';
import './Header.css';

export function Header() {
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li><a to='/'>HOME</a></li>
                    <li><a to='/projects'>PROJECTS</a></li>
                    <li><a to='/about'>ABOUT</a></li>
                    <li><a to='/resume'>RESUME</a></li>
                    <li><a to='/contact'>CONTACT</a></li>
                </ul>
            </nav>
        </header>
    )
}