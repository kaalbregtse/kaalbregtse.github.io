import React from 'react'
import '../css/hero_banner.css';

export default function HeroBanner () {
    return (
        <div className='hero_banner'>
            <p className='intro'>Hi, my name is</p>
            <h1>Kyczar Aalbregtse</h1>
            <h2>I build things for the web.</h2>
            <p className='short_desc'>
                I'm a software engineer specializing in building (and sometimes designing) exceptional 
                digital experiences. Currently, I'm focused on building accessible, 
                human centered products at <a href='/'>Kirby Risk</a>. 
            </p>
            <button>Check Out my Work</button>
        </div>
    )
}