import {
    BusinessCenterOutlined,
    Description,
    HomeOutlined,
    Person,
    SendOutlined,
    WallpaperOutlined,
} from "@material-ui/icons";

export const menu = [
    {
        id: 1,
        title: "Home",
        icon: <HomeOutlined className="nav__icon" />,
        link: "home",
    },
    {
        id: 2,
        title: "about",
        icon: <Person className="nav__icon" />,
        link: "about",
    },
    {
        id: 3,
        title: "Skills",
        icon: <Description className="nav__icon" />,
        link: "skills",
    },
    {
        id: 4,
        title: "Qualification",
        icon: <Description className="nav__icon" />,
        link: "qualification",
    },
    {
        id: 5,
        title: "Services",
        icon: <BusinessCenterOutlined className="nav__icon" />,
        link: "services",
    },
    {
        id: 6,
        title: "Portfolio",
        icon: <WallpaperOutlined className="nav__icon" />,
        link: "portfolio",
    },
    {
        id: 7,
        title: "Contact me",
        icon: <SendOutlined className="nav__icon" />,
        link: "contact",
    },
];
export const testimonial = [
    {
        id: 1,
        img: "./assets/img/watcheM.png",
        name: "sara smith",
        client: "client",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, laboriosam.",
    },
    {
        id: 2,
        img: "./assets/img/watcheM2.png",
        name: "anna smith",
        client: "client",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, laboriosam.",
    },
    {
        id: 3,
        img: "./assets/img/watcheM.png",
        name: "jhon smith",
        client: "client",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, laboriosam.",
    },
    {
        id: 4,
        img: "./assets/img/watcheM2.png",
        name: "bicky smith",
        client: "client",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, laboriosam.",
    },
];
export const qualifications = [
    {
        jobTitle: "Front-End Web Developer",
        company: "CodingArt",
        city: "Agadir",
        startDate: "07-14-2022",
        endDate: "",
    },
    {
        jobTitle: "Software Enginner",
        company: "Flash Ingenierie",
        city: "Agadir",
        startDate: "06-01-2021",
        endDate: "11-01-2021",
    },
    {
        jobTitle: "Freelancer developer",
        company: "working remotely",
        startDate: "11-01-2021",
        endDate: "",
    },
    
    
];
export const projects=[
  {
    title:"HighSkills - Digital Agency Website",
    img:"./assets/img/pc.png",
    desc:"HighSkills is a digital agency that offers a wide range of digital services. The project involved creating a website for the agency, showcasing their expertise and highlighting their services. The website features a responsive design, ensuring optimal user experience across various devices. It includes informative sections about the agency, such as their mission, team, and areas of specialization.",
    link:"https://laila-saw.github.io/agency-template"
  },
  {
    title:"Simple E-commerce Website",
    img:"./assets/img/e-com.png",
    desc:"The Simple E-commerce Website is a minimalist online shopping platform developed using React.js and Redux for the frontend. It provides users with a seamless shopping experience, allowing them to browse and purchase products. The website integrates the Sprite payment method, offering a secure and convenient payment solution for customers. On the backend, the website utilizes Node.js and Express.js to handle server-side logic and API integration. MongoDB serves as the database for storing product information, user data, and order details. The website features an intuitive user interface, responsive design, and reusability of components. Users can browse through various product categories, view detailed product descriptions, add items to their cart, and proceed to checkout using the Sprite payment method.",
    link:"https://laila-saw.github.io/e-commerce-website" 
  },
  {
    title:"MERN Social Media Application",
    img:"./assets/img/social.png",
    desc:"The Sample MERN Social Media Application is a responsive and feature-rich platform built using the MERN stack. It allows users to register, log in, and engage in various social networking activities. Users can follow/unfollow others, create, edit, delete, and like posts, and view posts from their followers. The application provides a seamless and personalized social media experience",
    link:"https://laila-saw.github.io/social-media-app"
  },
  {
    title:"Admin panel",
    img:"./assets/img/admin.png",
    desc:"The Responsive Admin Panel is a versatile and scalable solution built using React.js. It serves as an administration interface that can be integrated into any website requiring a management component. The panel provides a user-friendly interface for efficient website administration.",
    link:"https://laila-saw.github.io/my-app" 
  },
  {
    title:"Achibest Express - Online Food Agency Website",
    img:"./assets/img/achibestExpress.png",
    desc:"Achibest Express is a food agency specializing in the importation and distribution of food products. This project involved creating the front-end of their website, providing customers with a seamless online experience to browse their products. The website showcases the agency's diverse range of food products, enabling users to explore their offerings and place orders conveniently.",
    link:""
  },
  {
    title:"Roomee Chat Application",
    img:"./assets/img/roomee.png",
    desc:"Roomee is a real-time chat application developed by CodingArt agency. In this project i use React.js and Tailwind CSS, to offer a user-friendly interface for seamless team communication. Redux is used for state management, while REST API integration and Mercure enable real-time messaging. Experience efficient collaboration with Roomee Chat Application",
    link:""
  },
  {
    title:"Nabhorelan - Guinean Carpooling Platform",
    img:"./assets/img/nabhorelan.png",
    desc:"Nabhorelan is a Guinean carpooling platform developed by CodingArt Digital Agency. It serves as a reliable and secure transport solution, catering to two specific user groups. as a part of The CodingArt team i developed the user interface of the Nabhorelan application using React.js and Tailwind CSS. These technologies ensured a responsive and visually appealing design. Redux was utilized for effective state management, providing seamless user interactions.and also i make REST API integration to enable smooth communication between the front-end and back-end, enhancing the platform's functionality.",
    link:""
  },
  {
    title:"Personal Portfolio Website",
    img:"./assets/img/portfolio.png",
    desc:"The Personal Portfolio Website is a dynamic and visually appealing online portfolio created using React.js. It serves as a showcase for an individual's skills, experiences, and accomplishments.",
    link:"https://glowing-clafoutis-ba1b04.netlify.app/"
  },
]
