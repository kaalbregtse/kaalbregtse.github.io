import React from 'react';
import '../css/nav.css';

import Resume from '../images/KyczarAalbregtseResume.pdf';

export default function Nav() {
    return (
        <nav id="nav">
            <div className='logo'>
                <h1>KJA</h1>
            </div>

            <div className='links'>
                <ul>
                    <li>
                        <a href='#about'>
                            <p>01.</p>
                            About
                        </a>
                    </li>
                    <li>
                        <a href='#experience'>
                            <p>02.</p>
                            Experience
                        </a>
                    </li>
                    <li>
                        <a href='#projects'>
                            <p>03.</p>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href='#contact'>
                            <p>04.</p>
                            Contact
                        </a>
                    </li>
                </ul>

                <button><a href={Resume} target='_blank' rel='noreferrer'>Resume</a></button>
            </div>

            <div className='hamburger'>
                        <p style={{fontSize: '25px', color: 'white'}}>+</p>
            </div>
        </nav>
    )
}