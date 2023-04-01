
import React, { createContext, useContext, useEffect, useReducer, useState, useRef } from 'react';
// 30:53
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
  Apps,
  BusinessCenterOutlined,
  Close,
  Description,
  Facebook,
  GitHub,
  HomeOutlined,
  LinkedIn,
  Person,
  SendOutlined,
  WallpaperOutlined,
  MouseOutlined,
  GetApp,
  ExpandMore,
  Code,
  Storage,
  School,
  EventNote,
  Web,
  ArrowForward,
  CheckCircleOutlined,
  BrushOutlined,
  NavigateBefore,
  NavigateNext,
  Star,
  StarHalf,
  StarBorder,
  PhoneAndroidOutlined,
  EmailOutlined,
  MapOutlined,
  Instagram,
  Twitter,
  ExpandLess,
  Brightness5Outlined,
  Brightness2Outlined
} from '@material-ui/icons';
import {Link} from 'react-scroll';
import emailjs from '@emailjs/browser';
import './index.css';
const ThemeContext=createContext();
const INITIAL_STATE={darkMode : JSON.parse(localStorage.getItem("theme")) || false};
const themeReducer=(state, action)=>{
switch (action.type) {
  case false:
    return {darkMode: false};
    break;
    case true:
    return {darkMode: true};
    break;
  default: return state;
}
}
const ThemeProvider=(props)=>{
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  useEffect(()=>{
    localStorage.setItem("theme", JSON.stringify(state.darkMode))
  }, [state.darkMode])
  return(
    <ThemeContext.Provider value={{state,dispatch}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
function App() {
  return (
      <ThemeProvider >
      <Homepage />
      </ThemeProvider>
  )
}


export default App;

function Homepage() {
  const theme=useContext(ThemeContext);
  const darkModethem=theme.state.darkMode;
  {darkModethem 
    ? document.querySelector('body').classList.add('darkModethem') 
    : document.querySelector('body').classList.remove('darkModethem')}
    window.onscroll=function(){
      if(document.documentElement.scrollTop>500){
        document.querySelector('.scrollUp').classList.add('show');
      }else{
        document.querySelector('.scrollUp').classList.remove('show');
      }
    }
  return (
    <div >
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Services />
          <Portfolio />
          <Project />
          <Testimonial />
          <Contact />
          <Footer />
          <a href="#home" className="scrollUp">
            <ExpandLess className="scrollUp__icon" />
          </a>
        </main>
    </div>
  )
}

function Header() {
  const theme=useContext(ThemeContext);
  const darkModethem=theme.state.darkMode;
  const [isOpened, setIsopened] = useState(false);
  const menu = [
    {
      id: 1,
      title: "Home",
      icon: <HomeOutlined className='nav__icon' />,
      link: 'home'
    },
    {
      id: 2,
      title: "about",
      icon: <Person className='nav__icon' />,
      link: 'about'
    },
    {
      id: 3,
      title: "Skills",
      icon: <Description className='nav__icon' />,
      link: 'skills'
    },
    {
      id: 4,
      title: "Qualification",
      icon: <Description className='nav__icon' />,
      link: 'qualification'
    },
    {
      id: 5,
      title: "Services",
      icon: <BusinessCenterOutlined className='nav__icon' />,
      link: 'services'
    },
    {
      id: 6,
      title: "Portfolio",
      icon: <WallpaperOutlined className='nav__icon' />,
      link: 'portfolio'
    },
    {
      id: 7,
      title: "Contact me",
      icon: <SendOutlined className='nav__icon' />,
      link: 'contact'
    }
  ];
  return (
    <div className="header" id="header">
      <div className="nav container">
        <Link to='/' className='nav__logo'><span>La</span>ila.</Link>
        <div className="nav__menu" id="nav-menu" style={{ bottom: isOpened && '0' }}>
          <ul className="nav__list grid">
            {
              menu.map((m) => (
                <li key={m.id} className="nav__item cap">
                  <Link
                    activeClass="active"
                    to={m.link}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={200}
                    className="nav__link"
                    onClick={() => setIsopened(false)}>{m.icon} {m.title} 
                  </Link>
                </li>
              ))
            }
          </ul>
          <Close className='nav__close' onClick={() => setIsopened(false)} />
        </div>
        <div className="nav__btns">
        <div style={{display:isOpened && "none"}} className="dark__mode-controler">
          <Brightness5Outlined onClick={()=>theme.dispatch({type:false})} className="dark__mode-icon"/>
          <Brightness2Outlined onClick={()=>theme.dispatch({type:true})} className="dark__mode-icon"/>
          <div style={{left:darkModethem && '50%'}} className="dark__mode-layer"></div>
        </div>
          <div className="nav nav__toggle" id="nav__toggle" onClick={() => setIsopened(true)}>
            <Apps />
          </div>
        </div>
      </div>
    </div>
  )
}
function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="home__content grid">
          <div className="home__social">
            <Link to='/' target="_blank">
              <LinkedIn className="social__icon" />
            </Link>
            <Link to='/'>
              <Facebook className="social__icon" />
            </Link>
            <Link to='/'>
              <GitHub className="social__icon" />
            </Link>
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
            <p className="home__description">Passionate about the realization and development of web projects,
            I create high performance & rich interactive websites that work across all platforms & devices.</p>
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
function About() {
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
function Skills() {
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
            <div className="skill__data">
              <div className="skill__title caps">
                <h3 className="skill__name">PHp</h3>
                <span className="skill__number">40%</span>
              </div>
              <div className="skill__bar">
                <span className="skill__porcentage php"></span>
              </div>
            </div>
          </div>
        </div>
        {/* !skill 2 */}
      </div>
    </section>
  )
}
function Qualification() {
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
                  2021 - 2022
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
                  2019 - 2022
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
                <div className="quali__title cap">Software Enginner</div>
                <span className="quali__subtitle cap">Flash Ingenierie- Agadir</span>
                <div className="quali__calender">
                  <EventNote className="calender_icon" />
                  06-2021 - 10-2021
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
                {/* <span className="quali__line"></span> */}
              </div>
              <div>
                <div className="quali__title cap">Freelancer developer</div>
                <span className="quali__subtitle cap">working remotely</span>
                <div className="quali__calender">
                  <EventNote className="calender_icon" />
                  10-2021 - till Now
                </div>
              </div>
            </div>
            {/* !quali 2 */}
           
          </div>
          {/* !quali content 2 */}
        </div>



      </div>
    </section>
  )
}
function Services() {
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
function Portfolio() {
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
function Project() {
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
function Testimonial() {
  const testimonial = [
    {
      id: 1,
      img: "./assets/img/watcheM.png",
      name: "sara smith",
      client: "client",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, laboriosam."
    },
    {
      id: 2,
      img: "./assets/img/watcheM2.png",
      name: "anna smith",
      client: "client",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, laboriosam."
    },
    {
      id: 3,
      img: "./assets/img/watcheM.png",
      name: "jhon smith",
      client: "client",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, laboriosam."
    },
    {
      id: 4,
      img: "./assets/img/watcheM2.png",
      name: "bicky smith",
      client: "client",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, laboriosam."
    },
  ]
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
function Contact() {
  const ref=useRef();
  const [done,setDone]=useState(false);
  const [focusedusername,setFocusedusername]=useState(false);
  const [focusedemail,setFocusedemail]=useState(false);
  const [focusedmsg,setFocusedmsg]=useState(false);
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [subject,setSubject]=useState('');
  const [msg,setMsg]=useState('');
  const errorMsg={
    username:"userName is requared *",
    email:"it should be a valid email address *",
    msg:"it can't be empty *"
  }
  function handleSubmit(e){
    e.preventDefault();
    emailjs.sendForm(
      'service_1n8kyu9', 
      'template_1ltr0lc', 
      ref.current, 
      'user_NNBXdn4rLyJZQVlfvqKbI')
    .then((result) => {
        console.log(result.text);
        setDone(true);
        setFocusedusername(false);
        setFocusedemail(false);
        setFocusedmsg(false);
        setUsername("");
        setEmail("");
        setSubject("");
        setMsg("");
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title cap">contact me</h2>
      <span className="section__subtitle cap">get in touch</span>
      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <PhoneAndroidOutlined className='contact__icon' />
            <div>
              <div className="contact__title cap">call me</div>
              <span className="contact__subtitle cap">07 67 77 36 20</span>
            </div>
          </div>
          <div className="contact__information">
            <EmailOutlined className='contact__icon' />
            <div>
              <div className="contact__title cap">email</div>
              <span className="contact__subtitle">laila.ouhamou99@gmail.com</span>
            </div>
          </div>
          <div className="contact__information">
            <MapOutlined className='contact__icon' />
            <div>
              <div className="contact__title cap">Location</div>
              <span className="contact__subtitle cap">Agadir, morocco.</span>
            </div>
          </div>
        </div>
        <form
          ref={ref}
          className="contact__form grid"
          onSubmit={handleSubmit}
          >
          <div className="contact__inputs grid">
            <div className="contact__content">
              <input
                onBlur={(e)=>setFocusedusername(true)}
                focused={focusedusername.toString()}
                required
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                name="name"
                type="text"
                className="contact__input"
                placeholder='Your Name' />
                <div className='errorMsg'>{errorMsg.username}</div>
            </div>
              <div className="contact__content">
              <input
                onBlur={(e)=>setFocusedemail(true)}
                focused={focusedemail.toString()}
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                name="email"
                type="email"
                className="contact__input"
                placeholder='Your Email' />
            <div className='errorMsg'>{errorMsg.email}</div>
            </div>
              <div className="contact__content">
              <input
                onChange={(e)=>setSubject(e.target.value)}
                value={subject}
                name="subject"
                type="text"
                className="contact__input"
                placeholder='Your Project' />
            </div>
              <div className="contact__content">
              <textarea 
              onBlur={(e)=>setFocusedmsg(true)}
              focused={focusedmsg.toString()}
              required
              placeholder='Type your message..'
              onChange={(e)=>setMsg(e.target.value)}
              value={msg}
              name='message'
              className="contact__input contact__textarea"></textarea>
              <div className='errorMsg'>{errorMsg.msg}</div>
            </div>
            
          </div>
          <div>
            <button  className="button button--flex">
              send message
              <SendOutlined className="button__icon" />
            </button>
           {done &&  <span className="successMsg">Thank You !</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
function Footer() {
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



