import { SendOutlined } from '@material-ui/icons'
import React from 'react'

const Project = () => {
    return (
        <section className="project section" id="project">
          <div className="project__bg">
            <div className="project__container container grid">
              <div className="project__data">
                <h2 className="project__title cap">you have a new project ?</h2>
                <p className="project__desc">contact me now & get a 30% discount on your new project.</p>
                <a href="#contact" className="button button--flex button--white">
                  Contact me
                  <SendOutlined className="button__icon project__icon" />
                </a>
              </div>
              <img src="./assets/img/watcheM2.png" alt="" className="project__img" />
            </div>
          </div>
        </section>
      )
}

export default Project