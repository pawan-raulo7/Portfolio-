import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Circle from '../../assets/Circle.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={Circle} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I have experience working on real-time tech projects that solve practical problems.</p>
            <p>My passion lies in building innovative solutions that make a positive impact on people's lives.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>Python</p><hr style={{width: '70%'}}/><span className="percentage">90%</span></div>
            <div className="about-skill"><p>React Js</p><hr style={{width: '50%'}}/><span className="percentage">50%</span></div>
            <div className="about-skill"><p>Node Js</p><hr style={{width: '60%'}}/><span className="percentage">60%</span></div>
            <div className="about-skill"><p>Mysql</p><hr style={{width: '80%'}}/><span className="percentage">80%</span></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>Hackathon</h1>
          <p>Winner Second-runner up</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>real-world Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>years Stock Market Experience</p>
        </div>
      </div>
    </div>
  )
}

export default About