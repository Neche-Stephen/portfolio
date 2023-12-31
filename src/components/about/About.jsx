import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpg' 
import ME from '../../assets/IMG_8250.JPG'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      {/* What is the difference between .jsx and .js */}
      <h2>About me</h2>
      <div className="container about__container">
        
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
    

        <div className="about__content">
            {/* <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>200+ </small>
              </article>

              <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div> */}

            <p>I build responsive websites using different web technologies</p>

            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sit illum laboriosam ut autem aut tempora blanditiis porro, quidem cum perspiciatis recusandae molestiae voluptates itaque cupiditate facere necessitatibus, minima natus.</p> */}

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

      
    </section>
  )
}

export default About