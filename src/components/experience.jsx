import React, { useState } from "react";
import '../css/experience.css';

export default function Experience() {

    const [jobNum, setJobNum] = useState(0);

    const jobs = [
        {
            title: 'IT Developer',
            company: '@ Kirby Risk',
            duration: 'June 2024 - Present',
            desc: 'Across three teams, eCommerce, data, and app development, I assist different projectsbased on demand by collaborating with cross functional teams to align technology solutions with business objectives.',
            bullets: [<li>Lead development on new site search algorithm using site data, consumer surveys and industry trends.</li>, 
                      <li>Contributed to digital transformation with the launch of our new site, content migration and optimization.</li>,
                      <li>Redesigned and developed old/deprecated internal tools to more modern and maintainable technologies.</li>
                    ]
        },
        {
            title: 'eCommerce Developer Intern',
            company: '@ Kirby Risk',
            duration: 'May 2022 - May 2024',
            desc: 'Increased user engagement and streamlined user experience by leading development of different web pages, widgets and apps for our eCommerce platform and internal tools. ',
            bullets: [
                <li>Lead development of new careers page, decreasing time-to-fill on open positions.</li>,
                <li>Developed app for Finance department to streamline start of day tasks giving them back an hour of time.</li>,
                <li> Produced reusable widgets to easily update ad campaigns on our web store.</li>
            ]
        },
        {
            title: 'Tier 1 Tech Support',
            company: '@ Roeing Corporation',
            duration: 'Jan 2020 - Aug 2020',
            desc: 'Tech Support',
            bullets: [
                <li>Handled cleaning and imaging of 300+ devices to fit HIPAA certifications.</li>,
                <li>Assisted walk-in customers with break-fix issues.</li>,
                <li>Managed inventory and purchasing of needed parts for repairs and upgrades.</li>,
                <li>Rode along on, site-calls to observe setting up corporate networks.</li>
            ]
        }
    ]

    function activeStyles (id) {
        document.getElementById('it_dev').classList.remove('active');
        document.getElementById('ecom_dev').classList.remove('active');
        document.getElementById('tech_supp').classList.remove('active');

        document.getElementById(id).classList.add('active');
    }

    return (
        <section className="experience_sections" id="experience">
            <div className="title_container">
                <p className="num">02.</p>
                <p className="title">Where I've worked</p>
                <hr />
            </div>

            <div className="experience_container">
                <div className="job_tabs">
                    <span>
                        <div className='job_titles active' id='it_dev' onClick={() => {setJobNum(0); activeStyles('it_dev')}}>IT Developer</div>
                        <div className='job_titles ' id='ecom_dev' onClick={() => {setJobNum(1); activeStyles('ecom_dev')}}>eCommerce Developer</div>
                        <div className='job_titles ' id='tech_supp' onClick={() => {setJobNum(2); activeStyles('tech_supp')}}>Tech Support</div>
                    </span>
                </div>

                <div className="job_desc">
                    <h3>{jobs[jobNum].title} <span className="highlighted">{jobs[jobNum].company}</span></h3>
                    <p className="timeline">{jobs[jobNum].duration}</p>

                    <ul className="job_bullets">
                        {jobs[jobNum].bullets}
                    </ul>
                </div>
            </div>
        </section>
    )
}