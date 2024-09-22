import React from "react";
import Babblebot from '../images/babblebot_ss.png';
import WebScraper from '../images/webScraperGraphic.png';
import WhatToEat from '../images/whatToEatGraphic.png';
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
        },
        {
            title: 'Web Scraper',
            shortDesc: 'Web scraper used to collect product information across multiple sites for comparison. Enter the site URLs and the product UPC numbers to get a generated excel report comparing the prices for each product across the sites.',
            link: 'https://github.com/kaalbregtse/Python-Web-Scraper',
            githubLink: 'https://github.com/kaalbregtse/Python-Web-Scraper',
            technologies: [<p>Python</p>, <p>Scrape.do</p>, <p>Pandas</p>, <p>BeautifulSoup4</p>, <p>TkInter</p>, <p>Selenium</p>]
        },
        {
            title: 'WhatToEat',
            shortDesc: 'WhatToEat? is a single page react web app, used to help figure out what to eat with ingredients you have. It uses OpenAIs API to generate recipe recommendations based off of the inputted ingredients. Users can also see a list of three recommended recipes every day.',
            link: 'https://github.com/kaalbregtse/WhatToEat',
            githubLink: 'https://github.com/kaalbregtse/WhatToEat',
            technologies: [<p>React</p>, <p>OpenAI</p>, <p>NodeJS</p>]
        }
    ]

    return (
        <section className="projects_section" id="projects">
            <div className="title_container">
                <p className="num">03.</p>
                <p className="title">Things I've Built</p>
                <hr />
            </div>

            <div className="project_container">
                <div className="project_img">
                    <img src={Babblebot} alt="babblebot home page screenshot"/>
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

            <div className="project_container">
                <div className="project_img">
                    <img src={WebScraper} alt="web scraper code screenshot"/>
                </div>

                <div className="project_info">
                    <h3 className="project_title">{projects[1].title}</h3>
                    <p className="project_desc">{projects[1].shortDesc}</p>
                    <div className="project_tech">
                        {projects[1].technologies}
                    </div>
                    <div className="project_icons">
                        <a href={projects[1].githubLink} target="_blank" rel="noreferrer"><FontAwesomeIcon className='project_link_icon repo' icon="fa-brands fa-square-github" /></a>
                    </div>
                </div>
            </div>

            <div className="project_container">
                <div className="project_img">
                    <img src={WhatToEat} alt="What to eat app screenshot"/>
                </div>

                <div className="project_info">
                    <h3 className="project_title">{projects[2].title}</h3>
                    <p className="project_desc">{projects[2].shortDesc}</p>
                    <div className="project_tech">
                        {projects[2].technologies}
                    </div>
                    <div className="project_icons">
                        <a href={projects[2].githubLink} target="_blank" rel="noreferrer"><FontAwesomeIcon className='project_link_icon repo' icon="fa-brands fa-square-github" /></a>
                    </div>
                </div>
            </div>

        </section>
    )
}