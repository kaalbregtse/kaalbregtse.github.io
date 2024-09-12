import React from "react";
import Babblebot from '../images/babblebot_ss.png';
import '../css/projects.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

library.add( faGithubSquare, faArrowUpRightFromSquare );

export default function Projects() {

    const projects = [
        {
            title: 'Babblebot',
            shortDesc: 'An AI driven educational site for educators and students to assist in developing early literacy skills. Babblebot aims to create a unique experience for students each time they login. A successful pilot was ran in Fremont Elementary School. You can ready about it here, ',
            link: 'https://babblebot.org/',
            githubLink: 'https://github.com/13xch/Babblebot-V2',
            technologies: [<p>React</p>, <p>Firebase</p>, <p>OpenAI</p>, <p>ChartJS</p>, <p>Dalle-3</p>]
        }
    ]

    return (
        <section className="projects_section">
            <div className="title_container">
                <p className="num">03.</p>
                <p className="title">Things I've Built</p>
                <hr />
            </div>

            <div className="project_container">
                <div className="project_img">
                    <img src={Babblebot} alt="babblebot home page screenshot" height={350} width={600}/>
                </div>

                <div className="project_info">
                    <h3 className="project_title">{projects[0].title}</h3>
                    <p className="project_desc">{projects[0].shortDesc} <a className='media_link' target='_blank' rel="noreferrer" href="https://www.journalgazette.net/local/schools/education-notebook-trine-university-students-create-reading-tool/article_ff0b8a4c-07ee-11ef-8997-1707a63fd2cc.html">The Journal Gazette</a>.</p>
                    <div className="project_tech">
                        {projects[0].technologies}
                    </div>
                    <div className="project_icons">
                        <a href={projects[0].githubLink} target="_blank" rel="noreferrer"><FontAwesomeIcon className='project_link_icon repo' icon="fa-brands fa-square-github" /></a>
                        <a href={projects[0].link} target="_blank" rel="noreferrer"><FontAwesomeIcon className='project_link_icon' icon="fa-solid fa-arrow-up-right-from-square" /></a>
                    </div>
                </div>
            </div>

        </section>
    )
}