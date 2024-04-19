import React from 'react';
import './Footer.css';

export function Footer() {
    return (
        <footer className='footer'>
            <nav>
                <ul>
                    <li><a href='/'>Back to top</a></li>
                    <li><a href='https://www.github.com/harfore'>GitHub</a></li>
                    <li><a href='https://www.linkedin.com/in/rémi-harfoush-440823255/'>LinkedIn</a></li>
                    {/* <li><a href='https://www.github.com/harfore'><img src='../images/github.png' /></a></li> */}
                    {/* <li><a href='https://www.linkedin.com/in/rémi-harfoush-440823255/'><img src='../images/linkedin.png' /></a></li> */}
                    <li><a href="mailto:remiharfoush@gmail.com">remiharfoush@gmail.com</a></li>
                </ul>
            </nav>
        </footer>
    )
}