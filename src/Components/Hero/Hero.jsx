import React from 'react'
import './Hero.css'
import Circle from '../../assets/Circle.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='Hero'>
        <img src={Circle} alt=''/>
        <h1><span>Hello! I’m Pawan Raulo,</span> an Indian-based Full-Stack Developer.</h1>
        <p>Full-stack developer with experience in building responsive and user-friendly web applications.</p>
        <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With Me</AnchorLink></div>
        <a className="hero-resume" href="https://drive.google.com/file/d/1u-jVHz5TyZIux3Xnehd56ZUsi_t8QUjg/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a>
    </div>
    </div>
  )
}

export default Hero