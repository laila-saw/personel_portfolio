import { ArrowForward, BrushOutlined, CheckCircleOutlined, Close, Code, Web } from '@material-ui/icons';
import React, { useState } from 'react'

const Services = () => {
    const [service, setService] = useState(0);
    function handleClick(id) {
      setService(id)
  
    }
    function handleClose() {
      setService(0)
      setTimeout(() => {
        setService(0)
      }, 200);
    }
  
    return (
      <section className="services section" id="services">
        <h2 className="section__title cap">Services</h2>
        <span className="section__subtitle cap">What i offer</span>
        <div className="services__container container grid">
          {/* services 1 */}
          <div className="services__content" >
            <div className='services__header'>
              <Web className='services__icon' />
              <h3 className="services__title cap">SEO <br /> optimizations</h3>
              <span
                onClick={() => handleClick('1')}
                className="button button--flex button--small button--link services__button">
                View More
                <ArrowForward className="button__icon" />
              </span>
            </div>
  
            <div
              className="services__modal"
              style={{
                opacity: service === '1' && "1",
                visibility: service === '1' && "visible"
              }}>
              <div
                className="services__modal-content"
                style={{ transform: service === '1' && 'scale(1)' }}>
                <div className="modal-head">
                  <h4 className="services__modal-title">SEO optimizations</h4>
                  <Close className="services__modal-close" onClick={() => handleClose()} />
                </div>
                <ul className="services__modal-services">
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>Keyword research and selectione.</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>Predictive keyword analysis.</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>Meta tags (Title & description).</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>Image optimization.</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>Header Tags Optimized or Applied.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* !services 1 */}
          {/* services 2 */}
          <div className="services__content" >
            <div className='services__header'>
              <BrushOutlined className='services__icon' />
              <h3 className="services__title cap">Front-End <br /> Developer</h3>
              <span
                onClick={() => handleClick('2')}
                className="button button--flex button--small button--link services__button">
                View More
                <ArrowForward className="button__icon" />
              </span>
            </div>
  
            <div
              className="services__modal"
              style={{
                opacity: service === '2' && "1",
                visibility: service === '2' && "visible"
              }}>
              <div
                className="services__modal-content"
                style={{ transform: service === '2' && 'scale(1)' }}>
                <div className="modal-head">
                  <h4 className="services__modal-title">Front-End  Developer</h4>
                  <Close className="services__modal-close" onClick={() => handleClose()} />
                </div>
                <ul className="services__modal-services">
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>i design interactive user interfaces & Reusable Components.</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>i create a W3C validated HTML code.</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>i develope responsive websites.</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>i solve any css/js/react issues.</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>i convert  XD, Figma , Sketch  to html css & javascript/react js.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* !services 2 */}
          {/* services 3 */}
          <div className="services__content">
            <div className='services__header'>
              <Code className='services__icon' />
              <h3 className="services__title cap">Back-end <br /> developer</h3>
              <span
                onClick={() => handleClick('3')}
                className="button button--flex button--small button--link services__button">
                View More
                <ArrowForward className="button__icon" />
              </span>
            </div>
  
            <div
              className="services__modal"
              style={{
                opacity: service === '3' && "1",
                visibility: service === '3' && "visible"
              }}>
              <div
                className="services__modal-content"
                style={{ transform: service === '3' && 'scale(1)' }}>
                <div className="modal-head">
                  <h4 className="services__modal-title">Back-end developer</h4>
                  <Close className="services__modal-close" onClick={() => handleClose()} />
                </div>
                <ul className="services__modal-services">
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>I develop Secured endpoints.</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>Highly available API.</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>Deployment ready API.</p>
                  </li>
                  <li className="services__modal-service">
                    <CheckCircleOutlined className="services__modal-icon" />
                    <p>i solve any node.js/express.js/mongodb issues</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* !services 3 */}
        </div>
      </section>
    )
}

export default Services