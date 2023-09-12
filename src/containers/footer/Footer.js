import React from 'react'
import "./Footer.css"
import logo from '../../assets/logo.svg';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer section__padding">
      <div className='footer-heading'>
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className='footer-content'>
        <div className='footer-logo'>
          <img src={logo} alt="logo"/>
          <p>Cooperate on AI Safety, Compete on AI Capabilities.</p>
        </div>
        <div className='footer-links'>
          <h4>Socials</h4>
          <a href="https://www.youtube.com/OpenAI">Youtube</a>
          <a href="https://www.linkedin.com/company/openai/">LinkedIn</a>
          <a href="https://github.com/openai">Github</a>
          <a href="https://twitter.com/OpenAI">Twitter</a>
        </div>
        <div className='footer-links'>
        <h4>Company</h4>
          <a href="https://openai.com/policies">Terms & Conditions</a>
          <a href="https://openai.com/careers">Careers</a>
          <a href="info@openai.com">Contact</a>
        </div>
        <div className='footer-links'>
        <h4>Get in Touch</h4>
          <a>Sector-12 Chandigarh</a>
          <a>065-123456</a>
          <a>info@open.ai</a>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>&copy; {year} GPT. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer