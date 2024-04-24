import React from 'react';
import './Resume.css';

export function Resume() {
    const Education = [
        {
            title: "Computer Science - Bachelor's Degree",
            years: "2023 - 2025",
            place: "Ada Tech School - 75010 Paris",
            diploma: "RNCP Level VI- Application Designer and Developer",
            info1: "",
            info2: ""

        },
        {
            title: "International Trade and administration",
            years: "2020 - 2023",
            place: "Paris-XII University",
            diploma: "Bachelor's Degree",
            info1: "Study of economics, international trade, marketing and law",
            info2: "Last semester: Erasmus Exchange in Prague's Czech University of Life Sciences"
        },
        {
            title: "British Council",
            years: "2009 - 2019",
            place: "Paris",
            diploma: "Cambridge Advanced English (CAE) Diploma",
            info1: "Score: 200/210 (C2 Level)",
            info2: "Learning the English language"
        }
    ]

    return (
        <div id='resume_page'>
            <h1>Education</h1>
            <div id="education" >
                {Education.map((School, index) => (
                    <div className='school' key={index}>
                        <h2 className='description'>{School.title}</h2>
                        <h2>{School.years}</h2>
                        <p>{School.place}</p>
                        <h3>{School.diploma}</h3>
                        <p className='description'>{School.info1}</p>
                        <p className='description'>{School.info2}</p>
                    </div>
                ))}
            </div>
            <h1>Professional Experience</h1>
            <div class="experience">
                <h2 className='description'>Assistance Coordinator - Night Shift</h2>
                <h2>June - September 2022 & 2023</h2>
                <h2>AXA Assistance</h2>
                <p className='description'>Telephone communications: answering queries from customers traveling in France
                    and abroad</p>
                <p className='description' >Teamwork to find creative solutions to logistical problems</p>
                <p className='description' >Software use, file creation to leave an exhaustive paper trail</p>
            </div>
        </div>

    )
}