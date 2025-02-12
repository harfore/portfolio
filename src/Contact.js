import React from 'react';
import './Contact.css';
import mail from './images/mail.png';
import github from './images/github.png';
import linkedin from './images/linkedin.png';

export function Contact() {

    const Canals = [
        {
            name: "GitHub",
            link: "https://github.com/harfore",
            logo: github,
            description: "Your direct window into the evolution of my developer journey.",
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
            description: "Reach out directly! Ask me anything or let me know how we might benefit each other."
        }
    ]

    return (
        <footer>
            <div className='footer'>
                {Canals.map((Canal, index) => (
                    <div key={index}>
                        <div>
                            <a href={Canal.link}>
                                <img className='wLink' alt={Canal.name} src={Canal.logo} />
                            </a>
                        </div>
                        <div>
                            <p className='canal_description'>{Canal.description}</p>

                        </div>
                    </div>
                ))}
            </div>
        </footer>
    )
}