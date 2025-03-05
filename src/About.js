import React from 'react';
import './About.css';
import typing_gif from './images/typing_gif.gif';


export function About() {
    return (
        <div id="about_page">
            <img className='about_image' alt='decorative gif' src={typing_gif} />
            <div className='typewriter_container'>
                <div className="typewriter_mobile">Hi! I'm Rémi,<br />Paris' most dedicated software engineer.</div>
            </div>
            <div className="typewriter">Hi! I'm Rémi, Paris' most dedicated software engineer.</div>
            <h3 className="presentation_paragraph">Currently studying at Ada Tech School in Paris, I'm looking for a year-long block release training to continue developing my coding skills.
                I started my higher education with a bachelor's degree in International Trade, but am now interested in mastering a concrete skill: designing and conceiving web applications.</h3>
        </div>
    )
}