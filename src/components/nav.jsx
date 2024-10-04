import React from 'react';
import '../css/nav.css';

import Resume from '../images/KyczarAalbregtseResume.pdf';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

library.add( faBars, faXmark );

export default function Nav() {

    const openCloseHamburger = () => {
        const lines = document.getElementById('lines');
        const x = document.getElementById('x');
        const links = document.getElementById('links');

        if (lines.style.display === 'block') {
            lines.style.transition = '0.2s ease-in-out';
            links.style.transition = '0.5s ease-in-out';
            lines.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                lines.style.display = 'none';
                x.style.display = 'block';
                links.style.display = 'block';
                links.style.width = '100dvw';
                links.style.height = '100dvh';
            }, 200);
        } else {
            x.style.transition = '0.2s ease-in-out';
            x.style.transform = 'rotate(-360deg)';
            setTimeout(() => {
                x.style.display = 'none';
                lines.style.display = 'block';
                links.style.width = '0px';
            }, 200);
        }

    }

    return (
        <>
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
                <FontAwesomeIcon icon="fa-solid fa-bars" className='hamburger_lines' id="lines" onClick={(e) => {openCloseHamburger()}} style={{color: "#75ACA9",transition: '0.2s ease-in-out', display: 'block'}} />
                <FontAwesomeIcon icon="fa-solid fa-xmark" className='hamburger_x' id="x" onClick={(e) => {openCloseHamburger()}} style={{ display: 'none'}} />
            </div>
        </nav>

        <div className='mobile_links' id='links' style={{ width: '0px', overflow: 'hidden'}}>
            
            <div>
                <a href='#about'>
                    About
                </a>
                <a href='#experience'>
                    Experience
                </a>
                <a href='#projects'>
                    Projects
                    </a>
                <a href='#contact'>
                    Contact
                </a>

                <button>
                    <a href={Resume} target='_blank' rel='noreferrer'>Resume</a>
                </button>
            </div>
        </div>
        </>
    )
}