import React from 'react';
import './Projects.css';
import chaises_volantes from './images/chaises_volantes.png';
import social_network from './images/social_network.png';
import distractor from './images/distractor.png';
import happy_project from './images/happy_project.png';
import hyperfunk from './images/hyperfunk_home.png';
import oceanflask from './images/oceanflask.png';
import portfolio_image from './images/portfolio_image.png';
import amjad from "./images/amjad.png"

export function Projects() {

    const PersonalProjects = [
        {
            title: "Hyperfunk - in progress",
            image: hyperfunk,
            technos: ["ReactJS", "PostgreSQL", "Node.js", "Express"],
            description: "A learning student project, Hyperfunk aims to present concerts and connect live music amateurs all over the globe. Users will soon be able to set up a profile, view the world's most popular tours and look through the nearest upcoming events.",
            githubLink: "https://github.com/harfore/hyperfunk",
            liveDemo: "https://hyperfunk.vercel.app/"
        },
        {
            title: "Oceanflask",
            image: oceanflask,
            technos: ["Python (Flask)", "SQLite"],
            description: "Write, save your thoughts, revisit old entries and delete the ones you want gone.",
            githubLink: "https://github.com/harfore/oceanflask"
        },
        {
            title: "Amjad Janjoun",
            image: amjad,
            technos: ["Next.js", "Tailwind CSS"],
            description: "Porfolio with a slick and minimalist design to showcase fashion creations.",
            githubLink: "https://github.com/harfore/A-J",
            liveDemo: "https://amjadjanjoun.vercel.app/"
        },
        {
            title: "Portfolio",
            image: portfolio_image,
            technos: ["React"],
            description: "Your first look at my work. Check out my resume, as well as my personal and group coding projects.",
            githubLink: "https://github.com/harfore/portfolio"
        }
    ]

    const GroupProjects = [
        {
            title: "Les Chaises Volantes",
            image: chaises_volantes,
            technos: ["React", "Tailwind", "HTML", "Express", "Node.js"],
            description: "Find your next favorite furniture item with this dynamic platform displaying a wide variety of items.",
            githubLink: "https://github.com/harfore/Chaises-Volantes",
            liveDemo: "https://plateforme-vente-meubles-chaisesvolantes-front.vercel.app/"
        },
        {
            title: "Social Network",
            image: social_network,
            technos: ["PHP", "CSS", "HTML", "MySQL", "MariaDB"],
            description: "This social network is a platform that allows users to register and login. They can explore the different pages, like posts and follow users but they can also post messages.",
            githubLink: "https://github.com/harfore/Social-Network"
        },
        {
            title: "The Distractor",
            image: distractor,
            technos: ["HTML", "CSS", "JavaScript", "Chrome Storage"],
            description: "Need a quick break from your work ? We offer numerous, captivating distractions on demand in the shape of a pop-up window.",
            githubLink: "https://github.com/harfore/Distractor"
        },
        {
            title: "Happy Project",
            image: happy_project,
            technos: ["HTML", "CSS", "JavaScript", "Jikan API", "Postman"],
            description: "The very start of my developer journey. Find your next favorite anime series after taking a quick personality test.",
            githubLink: "https://github.com/harfore/HAPPY-PROJECT",
            liveDemo: "https://harfore.github.io/HAPPY-PROJECT/"
        }
    ]

    const ifLiveDemoGroup = (GroupProject) => {
        if ('liveDemo' in GroupProject) {
            return <a href={GroupProject.liveDemo} target='_blank' rel='noopener noreferrer'><button className='projectButton' type='button'>Live Demo</button></a>
        } else {
            return null;
        }
    }
    const ifLiveDemoPersonal = (PersonalProject) => {
        if ('liveDemo' in PersonalProject) {
            return <a href={PersonalProject.liveDemo} target='_blank' rel='noopener noreferrer'><button className='projectButton' type='button'>Live Demo</button></a>
        } else {
            return null;
        }
    }

    return (
        <div id='projects_page'>
            <h1>Personal Projects</h1>
            <div className='personalProjects'>
                {PersonalProjects.map((PersonalProject, index) => (
                    <div className='personalProject' key={index}>
                        <div className='personalProject-content'>
                            <div className='project'>
                                <div className='project_left'>
                                    <img className='group_project_image' src={PersonalProject.image} alt='' />
                                </div>
                                <div className='project_right'>
                                    <h2>{PersonalProject.title}</h2>
                                    <p className='project_description' >{PersonalProject.description}</p>
                                    <div className='projectTechnos'>
                                        {PersonalProject.technos.map((techno, index) => (
                                            <p key={index} className='projectTechno'> {techno}</p>
                                        ))}
                                    </div>
                                    <a href={PersonalProject.githubLink} target='_blank' rel='noopener noreferrer' ><button className='projectButton' type='button'>View on Github</button></a>
                                    {ifLiveDemoPersonal(PersonalProject)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h1>Group Projects</h1>
            <div className="groupProjects">
                {GroupProjects.map((GroupProject, index) => (
                    <div className='groupProject' key={index}>
                        <div class="groupProject-content">
                            <div className='project'>
                                <div className='project_left'>
                                    <img className='group_project_image' src={GroupProject.image} alt='' />
                                </div>
                                <div className='project_right'>
                                    <h2>{GroupProject.title}</h2>
                                    <p className='project_description'>{GroupProject.description}</p>
                                    <div className='projectTechnos'>
                                        {GroupProject.technos.map((techno, index) => (
                                            <p key={index} className='projectTechno'> {techno}</p>
                                        ))}
                                    </div>
                                    <a href={GroupProject.githubLink} target='_blank' rel='noopener noreferrer'><button className='projectButton' type='button'>View on GitHub</button></a>
                                    {ifLiveDemoGroup(GroupProject)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}