import React from 'react'
import "./Footer.css"
import logo from '../../assets/logo.svg';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer section__padding">
      <div className='footer-heading'>
        <h1 className="gradient__text">Do you want to step into the world of tech</h1>
        <button><a href="https://infotrek24.tech/events">See Events</a></button>
      </div>
      <div className='footer-content'>
        <div className='footer-logo'>
          <img src={logo} alt="logo" className="logo-img"/>
          <p>the world's largest educational and scientific computing society.</p>
        </div>
        <div className='footer-links'>
          <h4>Socials</h4>
          <a href="https://www.youtube.com/@TheOfficialACM">Youtube</a>
          <a href="https://www.linkedin.com/company/acm-student-chapter-nit-trichy/posts/?feedView=all">LinkedIn</a>
          <a href="https://www.instagram.com/acm_nitt/">Instagram</a>
        </div>
        <div className='footer-links'>
        <h4>ACM</h4>
          <a href="https://infotrek24.tech/events">Events</a>
          <a href="https://infotrek24.tech/">Careers</a>
          <a href="info@acm.com">Contact</a>
        </div>
        <div className='footer-links'>
        <h4>Get in Touch</h4>
          <a>NIT TRICHY</a>
          <a>065-123456</a>
          <a>info@acm.com</a>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>&copy; {year} INFOTREK. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer