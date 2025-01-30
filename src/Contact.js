import React from 'react';
import './Contact.css';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import mail from './images/mail.png';

export function Footer() {

    const Canals = [
        {
            name: "GitHub",
            link: "https://github.com/harfore",
            logo: github,
            description: "",
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/r%C3%A9mi-harfoush-440823255/",
            logo: linkedin,
            description: "Keep up with my professional adventures and stay in touch."
        },
        {
            name: "Mail",
            link: "mailto:remiharfoush@gmail.com",
            logo: mail,
            description: "Reach out directly! Let me know how we can help each other."
        }
    ]

    return (
        <footer className='footer'>
            <a href='https://github.com/harfore'><img className='wLink' alt="GitHub Link" src={github} />L</a>
            <a href="https://linkedin.com/in/rémi-harfoush-440823255/"><img className='wLink' alt="LinkedIn Link" src={linkedin} />S</a>
            <a href="mailto:remiharfoush@gmail.com"><img className='wLink' src={mail} alt='Mail to remiharfoush@gmail.com' />R</a>
        </footer>
    )
}