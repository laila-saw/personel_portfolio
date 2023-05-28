import { BusinessCenterOutlined, EventNote, School } from '@material-ui/icons'
import React from 'react'

const Qualification = () => {
    return (
        <section className="qualification section" id="qualification">
          <input
            type="radio"
            onChange={(e) => e.target.value}
            name="quali"
            hidden
            id="education" checked />
          <input
            type="radio"
            onChange={(e) => e.target.value}
            name="quali"
            hidden
            id="work" />
          <h2 className="section__title cap">Qualification</h2>
          <span className="section__subtitle cap">my personel journery</span>
          <div className="quali__container container grid">
            <div className="quali__tabs">
              <label htmlFor='education' className="quali__button education button--flex">
                <School className='quali__icon' />
                Education
              </label>
              <label htmlFor='work' className="quali__button work button--flex">
                <BusinessCenterOutlined className='quali__icon' />
                Work
              </label>
              <div className="quali__layer"></div>
            </div>
            <div className="quali__sections">
              {/* quali content 1 */}
              <div className="quali__content education">
                {/* quali 1 */}
                <div className="quali__data">
                  <div>
                    <div className="quali__title cap">MERN stack developer</div>
                    <span className="quali__subtitle cap">self-study</span>
                    <div className="quali__calender">
                      <EventNote className="calender_icon" />
                      2021 - Till Now
                    </div>
                  </div>
                  <div>
                    <span className="quali__rounder"></span>
                    <span className="quali__line"></span>
                  </div>
                </div>
                {/* !quali 1 */}
                {/* quali 2 */}
                <div className="quali__data">
                  <div></div>
                  <div>
                    <span className="quali__rounder"></span>
                    <span className="quali__line"></span>
                  </div>
                  <div>
                    <div className="quali__title cap">Web Design</div>
                    <span className="quali__subtitle cap">self-study</span>
                    <div className="quali__calender">
                      <EventNote className="calender_icon" />
                      2019 - Till Now
                    </div>
                  </div>
                </div>
                {/* !quali 2 */}
                {/* quali 3 */}
                <div className="quali__data">
    
                  <div>
                    <div className="quali__title cap">Software Enginner</div>
                    <span className="quali__subtitle cap">errachidia - FST</span>
                    <div className="quali__calender">
                      <EventNote className="calender_icon" />
                      2019 - 2020
                    </div>
                  </div>
                  <div>
                    <span className="quali__rounder"></span>
                  </div>
                </div>
                {/* !quali 3 */}
                
              </div>
              {/* !quali content 1 */}
              {/* quali content 2 */}
              <div className="quali__content work" >
                {/* quali 1 */}
                <div className="quali__data">
                  <div>
                    <div className="quali__title cap">Front-End Web Developer</div>
                    <span className="quali__subtitle cap">CodingArt - Agadir</span>
                    <div className="quali__calender">
                      <EventNote className="calender_icon" />
                      07-2022 - 06-2023
                    </div>
                  </div>
                  <div>
                    <span className="quali__rounder"></span>
                    <span className="quali__line"></span>
                  </div>
                </div>
                {/* !quali 1 */}
                {/* quali 2 */}
                <div className="quali__data">
                  <div></div>
                  <div>
                    <span className="quali__rounder"></span>
                    <span className="quali__line"></span>
                  </div>
                  <div>
                    <div className="quali__title cap">Software Enginner</div>
                    <span className="quali__subtitle cap">Flash Ingenierie - Agadir</span>
                    <div className="quali__calender">
                      <EventNote className="calender_icon" />
                      06-2021 - 10-2021
                    </div>
                  </div>
                </div>
                {/* !quali 2 */}
                {/* quali 3 */}
                <div className="quali__data">
                  <div>
                    <div className="quali__title cap">Freelancer developer</div>
                    <span className="quali__subtitle cap">working remotely</span>
                    <div className="quali__calender">
                      <EventNote className="calender_icon" />
                      10-2021 - till Now
                    </div>
                  </div>
                  <div>
                    <span className="quali__rounder"></span>
                  </div>
                </div>
                {/* !quali 3 */}
              </div>
              {/* !quali content 2 */}
            </div>
    
    
    
          </div>
        </section>
      )
}

export default Qualification