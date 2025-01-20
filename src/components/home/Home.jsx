import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
            <img 
  src={Me} 
  alt="" 
  className='home__img' 
  style={{
    width: '250px',
    height: '250px',
    borderRadius: '500%',
   objectFit: 'cover',
    objectPosition: 'top'
  }} 
/>

                <h1 className="home__name">Tejasvi Urkande</h1>
                <span className="home__education">I'm a Software Developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home