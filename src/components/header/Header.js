import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/bb-removebg.png'
import HeaderSocials from './HeaderSocials'

// .me img{
//   position: relative;
//   top: -5rem;
//   right: -0.4rem;
// }

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Chinecherem Ubawike</h1>
        <h5 className='text-light'>Front-end and React Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
            <img src={ME} alt = "me" />
        </div>

        <a href = '#contact' className='scroll__down'> Scroll Down </a>
      </div>
    </header>
  )
}

export default Header