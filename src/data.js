import { BusinessCenterOutlined, Description, HomeOutlined, Person, SendOutlined, WallpaperOutlined } from "@material-ui/icons";

export const menu = [
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
  export const testimonial = [
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