import React from 'react';
import './Resume.css';

export function Resume() {
    const Education = [
        {
            title: "Computer Science",
            time: "2023 - 2026",
            name: "Ada Tech School",
            location: "Paris",
            diploma: "Bachelor's Degree, RNCP Level VI Diploma - Application Designer and Developer",
            link: "https://adatechschool.fr/programme/",
            info: [
                "Full-stack web application development with modern stacks",
                "Clean code, project-based learning through peer/mob programming and agile methodology, for accelerated skills development"
            ]
        },
        {
            title: "International Trade and Administration",
            time: "2020 - 2023",
            name: "Paris-XII University",
            diploma: "Bachelor's Degree",
            link: "https://aei.u-pec.fr/formations/licence-administration-et-echanges-internationaux-parcours-commerce-international",
            info: [
                "Study of economics, international trade and marketing",
                "Last semester: Erasmus Exchange in Prague's Czech University of Life Sciences"
            ]
        },
        {
            title: "British Council | University of Cambridge",
            time: "2009 - 2019",
            place: "Paris",
            diploma: "C1 Advanced (formerly Cambridge Advanced English Diploma)",
            link: "https://learnenglish.britishcouncil.org/",
            info: [
                "Formal certification from Cambridge English",
                "Score: 200/210 (C2 Level)",
                "Learning the English language"
            ]
        },
        {
            title: "Sainte Elisabeth High School",
            time: "2017 - 2020",
            place: "Paris",
            diploma: "Economic and Social High School Diploma, awarded with high honors",
            link: "https://www.sainte-elisabeth.com/",
            info: [
                "Class representative for student life (2018 - 2019)",
                "Specialty: Applied Economics"
            ]
        }
    ];

    const Professional = [
        {
            title: 'Full Stack Developer',
            company: 'Inopakt',
            time: 'November - December 2024',
            info: [
                "Conception and development of a fitness app with Node.js, TypeScript, Angular and MongoDB",
                "Application of object-oriented programming principle to build on a scalable and efficient architecture"
            ]
        },
        {
            title: "Assistance Coordinator - Night Shift",
            company: "AXA",
            time: "June - September 2022, 2023, 2024",
            info: [
                "Efficient coordination of complaints from 100+ customers a week travelling in France and abroad, positive feedback from management and customers",
                "Compiling fast and accessible documentation",
                "Teamwork to find creative solutions to logistical problems",
                "Compliance with internal procedures, supporting operational efficiency"
            ]
        }
    ]

    return (
        <div id='resume_page'>
            <h1>Education</h1>
            <div className="education" >
                {Education.map((schoolItem, index) => (
                    <div className='school' key={index}>
                        <h2 className='school-title'>{schoolItem.title}</h2>
                        <h3>{schoolItem.time} {schoolItem.place}</h3>
                        <h4>{schoolItem.diploma}</h4>
                        {schoolItem.info.length > 0 && (
                            <ul className='school-info'>
                                {schoolItem.info.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <h1>Professional Experience</h1>
            <div className='experience'>
                {Professional.map((jobItem, index) => (
                    <div className='pro_experience' key={index}>
                        <h2 className="pro-title">{jobItem.title} | {jobItem.company}</h2>
                        <h3>{jobItem.time}</h3>
                        <ul className='job-info'>
                            {jobItem.info.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

    )
}