import { ArrowForward, NavigateBefore, NavigateNext } from '@material-ui/icons'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

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
            >
    {/* portfolio 0 */}
              <div className="portfolio__content">
                <div className="portfolio__img-container">
                  <div className="portfolio__img-header">
                    <span></span><span></span><span></span>
                  </div>
                  <img src="./assets/img/pc.png" alt="" className="portfolio__img" />
                </div>
                <div className="portfolio__data">
                  <h3 className="portfolio__title cap">Agency website</h3>
                  <p className="portfolio__desc">digital agency website</p>
                  <a 
                    href="https://laila-saw.github.io/agency-template" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__button button button--flex">
                    demo
                    <ArrowForward className='button__icon' />
                  </a>
                </div>
              </div>
              {/* !portfolio 0 */}
              {/* portfolio 1 */}
              <div className="portfolio__content">
                <div className="portfolio__img-container">
                  <div className="portfolio__img-header">
                    <span></span><span></span><span></span>
                  </div>
                  <img src="./assets/img/e-com.png" alt="" className="portfolio__img" />
                </div>
                <div className="portfolio__data">
                  <h3 className="portfolio__title cap">E-commerce website</h3>
                  <p className="portfolio__desc">Awesome E-commerce wesite design</p>
                  <a 
                    href="https://laila-saw.github.io/e-commerce-website" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__button button button--flex">
                    demo
                    <ArrowForward className='button__icon' />
                  </a>
                </div>
              </div>
              {/* !portfolio 1 */}
              {/* portfolio 2 */}
              <div className="portfolio__content">
                <div className="portfolio__img-container">
                  <img src="./assets/img/social.png" alt="" className="portfolio__img" />
                </div>
                <div className="portfolio__data">
                  <h3 className="portfolio__title cap">Social Media</h3>
                  <p className="portfolio__desc">the simple version of facebook</p>
                  <a 
                    href="https://laila-saw.github.io/social-media-app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__button button button--flex">
                    demo
                    <ArrowForward className='button__icon' />
                  </a>
                </div>
              </div>
              {/* !portfolio 2 */}
              {/* portfolio 3 */}
              <div className="portfolio__content">
                <div className="portfolio__img-container">
                  <img src="./assets/img/admin.png" alt="" className="portfolio__img" />
                </div>
                <div className="portfolio__data">
                  <h3 className="portfolio__title cap">Admin panel</h3>
                  <p className="portfolio__desc">amazing dashoard for any website</p>
                  <a 
                    href="https://laila-saw.github.io/my-app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__button button button--flex">
                    demo
                    <ArrowForward className='button__icon' />
                  </a>
                </div>
              </div>
              {/* !portfolio 3 */}
              {/* portfolio 4 */}
              <div className="portfolio__content">
                <div className="portfolio__img-container">
                  <img src="./assets/img/portfolio.png" alt="" className="portfolio__img" />
                </div>
                <div className="portfolio__data">
                  <h3 className="portfolio__title cap">Personel portfolio</h3>
                  <p className="portfolio__desc">creativity is my title</p>
                  <a 
                    href="https://laila-saw.github.io/my-personnel-portfolio" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__button button button--flex">
                    demo
                    <ArrowForward className='button__icon' />
                  </a>
                </div>
              </div>
              {/* !portfolio 4 */}
              {/* portfolio 5 */}
              <div className="portfolio__content">
                <div className="portfolio__img-container">
                  <img src="./assets/img/rock.png" alt="" className="portfolio__img" />
                </div>
                <div className="portfolio__data">
                  <h3 className="portfolio__title cap">Rock paper & sisser</h3>
                  <p className="portfolio__desc">simple game . i hope you enjoy it.</p>
                  <a 
                    href="https://laila-saw.github.io/rock-paper-scisser-game/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__button button button--flex">
                    demo
                    <ArrowForward className='button__icon' />
                  </a>
                </div>
              </div>
              {/* !portfolio 5 */}
              {/* portfolio 6 */}
              <div className="portfolio__content">
                <div className="portfolio__img-container">
                  <img src="./assets/img/tictactoe.png" alt="" className="portfolio__img" />
                </div>
                <div className="portfolio__data">
                  <h3 className="portfolio__title cap">Tic-tac-toe game</h3>
                  <p className="portfolio__desc">simple game.</p>
                  <a 
                    href="https://laila-saw.github.io/tic-tac-toe-game/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__button button button--flex">
                    demo
                    <ArrowForward className='button__icon' />
                  </a>
                </div>
              </div>
              {/* !portfolio 6 */}
              {/* portfolio 7 */}
              <div className="portfolio__content">
                <div className="portfolio__img-container">
                  <img src="./assets/img/tour.png" alt="" className="portfolio__img" />
                </div>
                <div className="portfolio__data">
                  <h3 className="portfolio__title cap">Tour & travel agency</h3>
                  <p className="portfolio__desc">Awesome website to book tours.</p>
                  <a 
                    href="https://laila-saw.github.io/tour-trips/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio__button button button--flex">
                    demo
                    <ArrowForward className='button__icon' />
                  </a>
                </div>
              </div>
              {/* !portfolio 7 */}
              
            </Carousel>
          </div>
        </section>
      )
}

export default Portfolio