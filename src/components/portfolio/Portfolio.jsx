import React from 'react'
import './portfolio.css'
import FoodApp from '../../assets/FoodApp.png'
import Fintech from '../../assets/Fintech.png'
import Invoice from '../../assets/invoiceapp.png'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
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
            <img src={Invoice} alt="" width="200" height="200"/>
          </div>
          <h3>Invoice Creation Web App for RAD5 TechHub and Academy</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Neche-Stephen/invoice" className='btn' target='_blank'>Github</a>
            <a href="https://invoice-lemon.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio