import { ArrowForward, Close, NavigateBefore, NavigateNext } from '@material-ui/icons'
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { projects } from '../data'

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
          <h2 className="section__title cap">portfolio</h2>
          <span className="section__subtitle cap">most recent work</span>
          <div className="portfolio__container container">
            <div className="btns">
              <div className="carousel__controler next"><NavigateBefore className="carousel__controler-icon" /></div>
              <div className="carousel__controler prev"><NavigateNext className="carousel__controler-icon" /></div>
            </div>

            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
            >
              {
                projects.map((item,i)=>(
                  <div key={i} className="portfolio__content">
                <div className="portfolio__img-container">
                  <div className="portfolio__img-header">
                    <span></span><span></span><span></span>
                  </div>
                  <img  src={item.img} alt="" className="portfolio__img" />
                </div>
                <div className="portfolio__data">
                  <h3 className="portfolio__title cap">{item.title}</h3>
                  <p className="portfolio__desc">{item.desc}</p>
                  <a 
                    href={item.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__button button button--flex">
                    demo
                    <ArrowForward className='button__icon' />
                  </a>
                </div>
              </div>
                ))
              }
              
            </Carousel>
          </div>
        </section>
      )
}

export default Portfolio