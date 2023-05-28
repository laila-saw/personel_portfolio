import React, { createContext, useContext } from 'react'
import Header from './components/Header';
import { ExpandLess } from '@material-ui/icons';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeContext } from './contextApi/context';

const HomePage = () => {
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

export default HomePage