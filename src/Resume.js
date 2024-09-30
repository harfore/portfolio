import React from 'react';
import './Resume.css';

export function Resume() {
    const Education = [
        {
            title: "Computer Science - Bachelor's Degree",
            place_and_years: "2023 - 2025, Ada Tech School - 75010 Paris",
            place: "Ada Tech School - 75010 Paris",
            diploma: "RNCP Level VI Diploma - Application Designer and Developer",
            info1: "",
            info2: ""

        },
        {
            title: "International Trade and administration",
            place_and_years: "2020 - 2023, Paris-XII University",
            diploma: "Bachelor's Degree",
            info1: "Study of economics, international trade, marketing and law",
            info2: "Last semester: Erasmus Exchange in Prague's Czech University of Life Sciences"
        },
        {
            title: "British Council",
            place_and_years: "2009 - 2019, Paris",
            place: "Paris",
            diploma: "Cambridge Advanced English (CAE) Diploma",
            info1: "Score: 200/210 (C2 Level)",
            info2: "Learning the English language"
        },
        {
            title: "Sainte Elisabeth High School",
            place_and_years: "2017 - 2020, Paris",
            diploma: "Economic and Social High School Diploma, awarded with high honors",
            info1: "Class Delegate for student life (2018 - 2019)"
        }
    ]

    return (
        <div id='resume_page'>
            <h1>Education</h1>
            <div id="education" >
                {Education.map((School, index) => (
                    <div className='school' key={index}>
                        <h2 className='description'>{School.title}</h2>
                        <h2>{School.place_and_years}</h2>
                        <h3>{School.diploma}</h3>
                        <p className='description'>{School.info1}</p>
                        <p className='description'>{School.info2}</p>
                    </div>
                ))}
            </div>
            <h1>Professional Experience</h1>
            <div className="experience">
                <h2 className='description'>Assistance Coordinator - Night Shift</h2>
                <h2>June - September 2022 & 2023</h2>
                <h2>AXA</h2>
                <p className='description'>Telephone communications: answering queries from customers traveling in France
                    and abroad</p>
                <p className='description' >Teamwork to find creative solutions to logistical problems</p>
                <p className='description' >Software use, file creation to leave an exhaustive paper trail</p>
            </div>
        </div>

    )
}