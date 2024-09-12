import React from 'react';
import { Button } from './Button';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <i className="fa-solid fa-mountain-sun"/>
            </Link>
          </div>
          <small class='website-rights'>Hari's Travel Blog © 2024</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/hari.girish.75/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/hari_girish/?next=%2Fmasontrumpets%2F'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/hari-girish-4611432a2/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
