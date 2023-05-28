import React, { createContext, useContext, useState } from 'react'
import { menu } from '../data';
import { Link } from 'react-scroll';
import { Apps, Brightness2Outlined, Brightness5Outlined, Close } from '@material-ui/icons';
import { ThemeContext } from '../contextApi/context';

const Header = () => {
  const theme=useContext(ThemeContext);
  const darkModethem=theme.state.darkMode;
  const [isOpened, setIsopened] = useState(false);
  
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

export default Header