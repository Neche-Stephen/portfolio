import React from 'react'
import './portfolio.css'
import FoodApp from '../../assets/FoodApp.png'
import Fintech from '../../assets/Fintech.png'
import Resturant from '../../assets/Resturant.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={FoodApp} alt="" width="200" height="200"/>
          </div>
          <h3>Landing Page for a Food Company</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Neche-Stephen/Neche-Stephen.github.io/tree/master/food-app" className='btn' target='_blank'>Github</a>
            <a href="https://neche-stephen.github.io/food-app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={Fintech} alt="" width="200" height="200"/>
          </div>
          <h3>Landing Page for a Fintech Company </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Neche-Stephen/Neche-Stephen.github.io/tree/master/fintech2" className='btn' target='_blank'>Github</a>
            <a href="https://neche-stephen.github.io/fintech2/index.html" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={Resturant} alt="" width="200" height="200"/>
          </div>
          <h3>Landing Page for an Indian Resturant</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Neche-Stephen/coursera-test/blob/gh-pages/module5-solution/index.html" className='btn' target='_blank'>Github</a>
            <a href="https://neche-stephen.github.io/coursera-test/module5-solution/index.html" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        {/* <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article> */}
        
      </div>
    </section>
  )
}

export default Portfolio