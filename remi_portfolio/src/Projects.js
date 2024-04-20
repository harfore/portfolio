import React from 'react';
import './Projects.css';

export function Projects() {

    const GroupProjects = [
        {
            title: "Chaises Volantes",
            client: "React, Tailwind, HTML",
            server: "Express, Node.js",
            description: "Find your next favorite furniture item with this dynamic platform displaying a wide variety of items.",
            githubLink: "https://github.com/harfore/Chaises-Volantes",
            liveDemo: "https://plateforme-vente-meubles-chaisesvolantes-front.vercel.app/"
        },
        {
            title: "Social Network",
            client: "HTML, CSS",
            server: "PHP, MySQL, MariaDB",
            description: "This social network is a platform that allows where users to register and login. They can explore the differents pages, like posts and follow users but they can also post messages.",
            githubLink: "https://github.com/harfore/Social-Network"
        },
        {
            title: "The Distractor",
            client: "HTML, CSS",
            server: "JavaScript, Chrome storage",
            description: "Need a quick break from your work ? We offer numerous, captivating distractions on demand in the shape of a pop-up window.",
            githubLink: "https://github.com/harfore/Distractor"
        },
        {
            title: "Happy Project",
            client: "HTML, CSS",
            server: "JavaScript, Jikan API, Postman",
            description: "Find your next favorite anime series after taking a quick personality test.",
            githubLink: "https://github.com/harfore/HAPPY-PROJECT",
            liveDemo: "https://harfore.github.io/HAPPY-PROJECT/"
        }
    ]

    const ifLiveDemo = (GroupProject) => {
        const ifLiveDemos = GroupProjects.some(GroupProject => 'liveDemo' in GroupProject)
        if (ifLiveDemos) {
            return <a href={GroupProjects.liveDemo} target='_blank' rel='noopener noreferrer'><button type='button'>Live Demo</button></a>
        } else {
            return null;
        }
    }

    return (
        <div>
            <h1>Group Projects</h1>
            {GroupProjects.map((GroupProject, index) => (
                <div key={index}>
                    <h2>{GroupProject.title}</h2>
                    <p>{GroupProject.description}</p>
                    <a href={GroupProject.githubLink} target='_blank' rel='noopener noreferrer'><button type='button'>View on GitHub</button></a>
                    {ifLiveDemo(GroupProject)}
                </div>
            ))}
        </div>
    )
}