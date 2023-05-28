import React from 'react'
import { testimonial } from '../data'
import { NavigateBefore, NavigateNext, Star, StarBorder, StarHalf } from '@material-ui/icons'
import { Carousel } from 'react-responsive-carousel'

const Testimonial = () => {
    
      return (
        <section className="testimonial section" id="testimonial">
          <h2 className="section__title cap">testimonial</h2>
          <span className="section__subtitle cap">my client saying</span>
          <div className="testimonial__container container">
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
                testimonial.map((t) => (
                  <div key={t.id} className="testimonial__content">
                    <div className="testimonial__data">
                      <div className="testimonial__header">
                        <img src={t.img} alt="" className="testimonial__img" />
                        <div>
                          <h3 className="testimonial__name cap">{t.name}</h3>
                          <span className="testimonial__client cap">{t.client}</span>
                        </div>
                      </div>
                      <div>
                        <Star className='testimonial__icon-star' />
                        <Star className='testimonial__icon-star' />
                        <Star className='testimonial__icon-star' />
                        <StarHalf className='testimonial__icon-star' />
                        <StarBorder className='testimonial__icon-star' />
                      </div>
                    </div>
                    <p className="testimonial__desc">{t.desc}</p>
                  </div>
                ))
              }
            </Carousel>
          </div>
        </section>
      )
}

export default Testimonial