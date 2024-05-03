import React from 'react';
import './Header.css';

export function Header() {
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/">PROJECTS</a></li>
                    <li><a href="/">ABOUT</a></li>
                    <li><a href="/">RESUME</a></li>
                    <li><a href="/">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    )
}