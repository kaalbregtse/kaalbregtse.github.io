import React from "react";
import BioImg from '../images/bio_picture.jpg';
import '../css/about_me.css';

export default function AboutMe() {
    return (
        <section className="about_me_section" id="about">
            <div className="title_container">
                <p className="num">01.</p>
                <p className="title">About Me</p>
                <hr />
            </div>

            <div className="bio_container">
                <div className="bio">
                    <p>Hello! My name is Kyczar and I enjoy creating things that live on the internet.
                        My interest in anything computers started when I was in middle school and I bough my 
                        first desktop with all the money I saved up. I did not know what I wanted to do with this 
                        passion until my first internship where I got to try my hand at web development.
                    </p>

                    <p>
                        Since then, I have had the opprotunity to continue my internship throughout my last two years of school,
                        and eventually got hired on full time after graduation. My main focus at <a className='paragraph_links' href="https://www.kirbyrisk.com/">Kirby Risk</a>, is 
                        to build the best possible digital experience for our customers. 
                    </p>

                    <p>
                        On the side, I am running my startup <a className='paragraph_links' href="https://babblebot.org/">Babblebot</a>. A supplemental online learning platform
                        for early readers and educators.
                    </p>

                    <p>Here are a few technologies I have been working with recently:</p>

                    <div className="technology_lists">
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>

                        <ul>
                            <li>Algolia</li>
                            <li>OpenAI</li>
                            <li>Figma</li>
                        </ul>
                    </div>

                </div>

                <div className="img_container">
                    <img className="bio_pic" alt='Kyczar Aalbregtse showing student how to use Babblebot.' src={BioImg} />
                </div>

            </div>
        </section>
    )
}