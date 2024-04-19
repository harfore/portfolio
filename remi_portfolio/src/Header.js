import React from 'react';
import './Header.css';

export function Header() {
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li><a href='/'>HOME</a></li>
                    <li><a href='/projects'>PROJECTS</a></li>
                    <li><a href='/about'>ABOUT</a></li>
                    <li><a href='/resume'>RESUME</a></li>
                    <li><a href='/contact'>CONTACT</a></li>
                </ul>
            </nav>
        </header>
    )
}