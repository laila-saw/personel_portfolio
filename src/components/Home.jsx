import { Facebook, GitHub, LinkedIn, MouseOutlined, SendOutlined } from '@material-ui/icons'
import React from 'react'

const Home = () => {
    return (
        <section className="home section" id="home">
          <div className="home__container container">
            <div className="home__content grid">
              <div className="home__social">
                <a href='https://www.linkedin.com/in/laila-ouhamou/' target="_blank" rel="noopener noreferrer">
                  <LinkedIn className="social__icon" />
                </a>
                <a href='https://web.facebook.com/leylaouhamou/' target="_blank" rel="noopener noreferrer">
                  <Facebook className="social__icon" />
                </a>
                <a href='https://github.com/laila-saw' target="_blank" rel="noopener noreferrer">
                  <GitHub className="social__icon" />
                </a>
              </div>
              <div className="home__img">
                <svg
                  className="home__blob"
                  viewBox="0 0 200 187"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink">
                  <mask id="mask0" mask-type="alpha">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                          130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                          97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                          0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                  </mask>
                  <g mask="url(#mask0)">
                    <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                    <image
                      className="home__blob-img"
                      x={5}
                      y={0}
                      href="./assets/img/IMG_20201029_175657-removebg-preview.png" />
                  </g>
                </svg>
              </div>
              <div className="home-data">
                <h1 className="home__title cap">hi, i'm <span className="name">La<span className="diff">ila Ouh</span>amou.</span></h1>
                <h3 className="home__subtitle cap">full stack developer</h3>
                <p className="home__description">With a passion for bringing web projects to life. With a strong focus on performance and user experience, I specialize in creating high-performance and rich interactive websites that seamlessly function across all platforms and devices. I thrive on the challenges of web development and take pride in delivering exceptional solutions that exceed client expectations. With my expertise and dedication, I am committed to crafting cutting-edge web experiences that leave a lasting impact.</p>
                <a href="#contact" className="button button--flex">Contact Me <SendOutlined className='button__icon' /></a>
              </div>
            </div>
            <div className="home__scroll">
              <a href="#about" className="home__scroll-btn" title="Scroll Down">
                <MouseOutlined className="scroll__mouse" />
              </a>
            </div>
          </div>
        </section>
      )
}

export default Home