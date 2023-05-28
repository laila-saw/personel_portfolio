import { GetApp } from '@material-ui/icons'
import React from 'react'

const About = () => {
    return (
        <section className="about section" id="about">
          <h2 className="section__title cap">About Me</h2>
          <span className="section__subtitle cap">My introduction</span>
          <div className="about__container container grid">
            <img
              src="./assets/img/p5.png"
              alt=""
              className="about__img" />
            <div className="about__data">
              <p className="about__desc">
                I'm a Web developer,
                with extensive knowledge and 2 years of experience,
                working in different web technologies (React js, Bootstrap, Jquery, Node js, Express Js ),
                taking great pleasure in practicing ,
                delivering  hight quality work.
              </p>
              <div className="about__info">
                <div className="info-item">
                  <span className="info-title">02</span>
                  <span className="info-name">Years <br /> experience</span>
                </div>
                <div className="info-item">
                  <span className="info-title">10</span>
                  <span className="info-name">Completed <br /> projects</span>
                </div>
                <div className="info-item">
                  <span className="info-title">3</span>
                  <span className="info-name">Companies <br /> worked</span>
                </div>
              </div>
              <div className="about__buttons">
                <a download="" href="./assets/laila ouhamou mern.pdf" className="button button--flex">
                  Download CV <GetApp className="button__icon" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )
}

export default About