import React from 'react';
import './Footer.css';
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import mail from './images/mail.png';

export function Footer() {
    return (
        <footer className='footer'>
            <nav>
                <ul>
                    <li><a href='/'>Back to top</a></li>

                    <li><a href='https://www.github.com/harfore'><img className='wLink' src={github} alt='GitHub Link' /></a></li>
                    <li><a href='https://www.linkedin.com/in/rémi-harfoush-440823255/'><img className='wLink' src={linkedin} alt='LinkedIn Link' /></a></li>
                    <li><a href="mailto:remiharfoush@gmail.com"><img className='wLink' src={mail} alt='Mail to remiharfoush@gmail.com' /></a></li>
                </ul>
            </nav>
        </footer>
    )
}