import { Code, ExpandMore, Storage } from '@material-ui/icons'
import React, { useState } from 'react'

const Skills = () => {
    const [open, setOpen] = useState(true)
    const [close, setClose] = useState(true)
    return (
      <section className="section skills" id="skills">
        <h2 className="section__title cap">Skills</h2>
        <span className="section__subtitle cap">My technical level</span>
        <div className="skills__container container grid">
          {/* skill 1 */}
          <div className={open ? "skill__content skill__open" : "skill__content skill__close"}>
            <div className="skill__header" onClick={() => { setOpen(!open); setClose(true) }}>
              <Code className="skill__icon" />
              <div>
                <h1 className="skill__title cap">Front end developer</h1>
                <span className="skill__subtitle cap">More than 2 years</span>
              </div>
              <ExpandMore className="skill__arrow" />
            </div>
            <div className="skill__list grid">
              <div className="skill__data">
                <div className="skill__title caps">
                  <h3 className="skill__name">HTML</h3>
                  <span className="skill__number">90%</span>
                </div>
                <div className="skill__bar">
                  <span className="skill__porcentage html"></span>
                </div>
              </div>
              <div className="skill__data">
                <div className="skill__title caps">
                  <h3 className="skill__name">CSS</h3>
                  <span className="skill__number">80%</span>
                </div>
                <div className="skill__bar">
                  <span className="skill__porcentage css"></span>
                </div>
              </div>
              <div className="skill__data">
                <div className="skill__title caps">
                  <h3 className="skill__name">Javascript</h3>
                  <span className="skill__number">80%</span>
                </div>
                <div className="skill__bar">
                  <span className="skill__porcentage javascript"></span>
                </div>
              </div>
              <div className="skill__data">
                <div className="skill__title caps">
                  <h3 className="skill__name">React js</h3>
                  <span className="skill__number">60%</span>
                </div>
                <div className="skill__bar">
                  <span className="skill__porcentage react"></span>
                </div>
              </div>
              <div className="skill__data">
                <div className="skill__title caps">
                  <h3 className="skill__name">Tailwand css</h3>
                  <span className="skill__number">60%</span>
                </div>
                <div className="skill__bar">
                  <span className="skill__porcentage react"></span>
                </div>
              </div>
            </div>
          </div>
          {/* !skill 1 */}
          {/* skill 2 */}
          <div className={close ? "skill__content skill__close" : "skill__content skill__open"} >
            <div className="skill__header" onClick={() => { setClose(!close); setOpen(false) }}>
              <Storage className="skill__icon" />
              <div>
                <h1 className="skill__title cap">Back end developer</h1>
                <span className="skill__subtitle cap">More than 1 year</span>
              </div>
              <ExpandMore className="skill__arrow" />
            </div>
            <div className="skill__list grid" >
              <div className="skill__data">
                <div className="skill__title caps">
                  <h3 className="skill__name">Node js</h3>
                  <span className="skill__number">45%</span>
                </div>
                <div className="skill__bar">
                  <span className="skill__porcentage node"></span>
                </div>
              </div>
              <div className="skill__data">
                <div className="skill__title caps">
                  <h3 className="skill__name">Express js</h3>
                  <span className="skill__number">45%</span>
                </div>
                <div className="skill__bar">
                  <span className="skill__porcentage express"></span>
                </div>
              </div>
              <div className="skill__data">
                <div className="skill__title caps">
                  <h3 className="skill__name">MongoDb</h3>
                  <span className="skill__number">45%</span>
                </div>
                <div className="skill__bar">
                  <span className="skill__porcentage mongo"></span>
                </div>
              </div>
            </div>
          </div>
          {/* !skill 2 */}
        </div>
      </section>
    )
}

export default Skills