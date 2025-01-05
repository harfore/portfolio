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

        </footer>
    )
}