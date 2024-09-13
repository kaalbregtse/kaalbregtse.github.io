import './css/App.css';
import Nav from './components/nav';
import HeroBanner from './components/hero_banner';
import AboutMe from './components/about_me';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

library.add( faInstagramSquare, faGithubSquare, faLinkedin, faTwitterSquare );

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='body_content'>

        <div class="left_sidebar"> 
          <div className='icon_links'>
            <a href='https://github.com/kaalbregtse' target='_blank' rel="noreferrer"><FontAwesomeIcon className='social_icon' icon="fa-brands fa-square-github" /></a>
            <a href='https://www.instagram.com/kyczaraalbregtse/' target='_blank' rel="noreferrer"><FontAwesomeIcon className='social_icon' icon="fa-brands fa-square-instagram" /></a>
            <a href='https://www.linkedin.com/in/kyczar-aalbregtse-52b545199/' target='_blank' rel="noreferrer"><FontAwesomeIcon className='social_icon' icon="fa-brands fa-linkedin" /></a>
            <div className='line'></div>
          </div>
        </div>

        <div class="center_content"> 
          <HeroBanner />
          <AboutMe />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>

        <div class="right_sidebar">
          <div className='email_link'>
            <a href='mailto: kyczaraalbregtse@gmail.com'>kyczaraalbregtse@gmail.com</a>
            <div className='line'></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
