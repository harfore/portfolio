import React from 'react';
import './Projects.css';
import chaises_volantes from './images/chaises_volantes.png';
import social_network from './images/social_network.png';
import distractor from './images/distractor.png';
import happy_project from './images/happy_project.png';

export function Projects() {

    const GroupProjects = [
        {
            title: "Les Chaises Volantes",
            image: chaises_volantes,
            technos: "React, Tailwind, HTML, Express, Node.js",
            description: "Find your next favorite furniture item with this dynamic platform displaying a wide variety of items.",
            githubLink: "https://github.com/harfore/Chaises-Volantes",
            liveDemo: "https://plateforme-vente-meubles-chaisesvolantes-front.vercel.app/"
        },
        {
            title: "Social Network",
            image: social_network,
            technos: "HTML, CSS, PHP, MySQL, MariaDB",
            description: "This social network is a platform that allows users to register and login. They can explore the different pages, like posts and follow users but they can also post messages.",
            githubLink: "https://github.com/harfore/Social-Network"
        },
        {
            title: "The Distractor",
            image: distractor,
            technos: "HTML, CSS, JavaScript, Chrome Storage",
            description: "Need a quick break from your work ? We offer numerous, captivating distractions on demand in the shape of a pop-up window.",
            githubLink: "https://github.com/harfore/Distractor"
        },
        {
            title: "Happy Project",
            image: happy_project,
            technos: "HTML, CSS, JavaScript, Jikan API, Postman",
            description: "Find your next favorite anime series after taking a quick personality test.",
            githubLink: "https://github.com/harfore/HAPPY-PROJECT",
            liveDemo: "https://harfore.github.io/HAPPY-PROJECT/"
        }
    ]

    const PersonalProjects = [
        {
            title: "Hyperfunk - in progress",
            image: "../images/hyperfunk.png",
            technos: "HTML, CSS, JavaScript, Ticketmaster API, Postman",
            description: "A learning student project, Hyperfunk aims to present concerts and connect live music amateurs all over the globe. Users will soon be able to set up a profile, view the world's most popular tours and look through the nearest upcoming events.",
            githubLink: "https://github.com/harfore/hyperfunk",
            liveDemo: ""
        },
        {
            title: "Portfolio",
            image: "",
            technos: "React",
            description: "Your first look at my work. Check out my resume, as well as my personal and group coding projects.",
            githubLink: "https://github.com/harfore/portfolio"
        }
    ]

    const ifLiveDemo = (GroupProject) => {
        if ('liveDemo' in GroupProject) {
            return <a href={GroupProject.liveDemo} target='_blank' rel='noopener noreferrer'><button className='projectButton' type='button'>Live Demo</button></a>
        } else {
            return null;
        }
    }

    return (
        <div id='projects_page'>
            <h1>Group Projects</h1>
            <div className="groupProjects">
                {GroupProjects.map((GroupProject, index) => (
                    <div className='groupProject' key={index}>
                        <h2>{GroupProject.title}</h2>
                        <img className='group_project_image' src={GroupProject.image} alt='' />
                        <p className='project_description'>{GroupProject.description}</p>
                        <p>Languages and tools: {GroupProject.technos}</p>
                        <a href={GroupProject.githubLink} target='_blank' rel='noopener noreferrer'><button className='projectButton' type='button'>View on GitHub</button></a>
                        {ifLiveDemo(GroupProject)}
                    </div>
                ))}
            </div>
            <h1>Personal Projects</h1>
            <div className='personalProjects'>
                {PersonalProjects.map((PersonalProject, index) => (
                    <div className='personalProject' key={index}>
                        <h2>{PersonalProject.title}</h2>
                        <img src={PersonalProject.image} alt='' />
                        <p className='project_description' >{PersonalProject.description}</p>
                        <p>{PersonalProject.technos}</p>
                        <a href={PersonalProject.githubLink} target='_blank' rel='noopener noreferrer' ><button className='projectButton' type='button'>View on Github</button></a>
                        <a href={PersonalProject.liveDemo} target='_blank' rel='noopener noreferrer' ><button className='projectButton' type='button'>Live Demo</button></a>
                    </div>

                ))}
            </div>

        </div>
    )
}