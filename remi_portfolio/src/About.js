import React from 'react';
import './About.css';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import typing_gif from './images/typing_gif.gif'

export function About() {
    return (
        <div id="about_page">
            <img className='about_image' src={typing_gif} />
            <div className="typewriter">Hi! I'm Rémi, an aspiring software developer.</div>
            <h3 className="presentation_paragraph">Currently studying at Ada Tech School in Paris, I'm looking for a year-long block release training to continue developing my coding skills.
                I started my higher education with a bachelor's degree in International Trade, but am now interested in mastering a concrete skill: designing and conceiving web applications.</h3>

            <a href='https://github.com/harfore'><img className='wLink' alt="GitHub Link" src={github} /></a>
            <a href="https://linkedin.com/in/rémi-harfoush-440823255/"><img className='wLink' alt="LinkedIn Link" src={linkedin} /></a>
        </div>
    )
}