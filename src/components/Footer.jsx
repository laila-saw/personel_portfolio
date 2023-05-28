import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer__bg">
            <div className="footer__container container grid">
              <div>
                <h1 className="footer__title cap">la<span>ila Ouh</span>amou.</h1>
                <span className="footer__subtitle cap">full stack Developer</span>
              </div>
              <ul className="footer__links">
                <li>
                  <a href="#about" className="footer__link cap">about me</a>
                </li>
                <li>
                  <a href="#services" className="footer__link cap">services</a>
                </li>
                <li>
                  <a href="#portfolio" className="footer__link cap">portfolio</a>
                </li>
                <li>
                  <a href="#contact" className="footer__link cap">contact me</a>
                </li>
              </ul>
              <div className="footer__socials">
                <a 
                href="http://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social">
                  <Facebook/>
                </a>
                <a 
                href="http://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social">
                  <Instagram/>
                </a>
                <a 
                href="http://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__social">
                  <Twitter/>
                </a>
              </div>
            </div>
            <p className="footer__copy">&#169; Laila ouhamou. All right reserved.</p>
          </div>
        </footer>
      )
}

export default Footer