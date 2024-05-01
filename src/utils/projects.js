import PROJECT_TYPE from "@/enums/project-type.js"

const projects = [
    {
        title: "Videogame Rest Api",
        url: "https://github.com/ernesto-1998/Videogame-Marketplace-Rest-Api",
        image: "/projects/videogame-rest-api.jpg",
        description: "A RESTful API for a Videogame Marketplace/Store. This API includes user authentication, CRUD operations for managing games, and powerful filtering capabilities to retrieve specific game data based on various criteria. It's built using Node.js, Express.js, PostgreSQL, MongoDB, Docker, and other technologies.",
        tech: ["nodejs", "express", "postgres", "mongodb", "express-session", "express-validator", "bcrypt", "docker", "docker compose"],
        type: PROJECT_TYPE.BACKEND,
    },
    {
        title: 'SmartStore SV',
        url: 'https://smartstoresv.netlify.app/', 
        image: '/projects/smart-store.jpeg',
        description: 'SmartStore SV is a comprehensive online marketplace dedicated to selling smartphones. It offers a seamless user experience with robust features like user authentication, advanced filtering options, and personalized CRUD functionalities for managing user listings. The frontend is developed using Vue 3 with Quasar framework, integrated with Firebase for backend services, including user management and data storage.',
        tech: ['Html', 'Css', 'Javascript' ,'Vue 3', 'Quasar', 'Firebase', 'Pinia', 'Vue-router'],
        type: PROJECT_TYPE.FULLSTACK, 
    },
    {
        title: 'VirtualDoc',
        url: 'https://virtualdoc.netlify.app/', 
        image: '/projects/virtualdoc.jpg',
        description: 'VirtualDoc is a comprehensive web application tailored for medical professionals, clinics, and healthcare providers. It facilitates patient management, prescription creation, appointment scheduling, and advanced patient filtering capabilities. The app ensures top-tier security practices and offers a seamless user experience. Built with Vue 2 and Quasar framework, integrated with Firebase for backend services.',
        tech: ['Html', 'Css', 'Javascript' ,'Vue 2', 'Quasar', 'Firebase', 'Vue-router'],
        type: PROJECT_TYPE.FULLSTACK, 
    },
    {
        title: 'Software Contable',
        url: 'https://anfdelsur.netlify.app', 
        image: '/projects/software-contable.jpg',
        description: 'Software Contable is a powerful financial analysis tool designed for desktop usage. It provides detailed financial insights by analyzing 10 financial statements, generating key financial ratios, vertical and horizontal analysis, and DuPont analysis. The intuitive interface includes interactive graphics to visualize financial data. Developed with Vue 3 and Quasar framework for a modern user experience.',
        tech: ['Html', 'Css', 'Javascript' ,'Vue 3', 'Quasar', 'Vue-router'],
        type: PROJECT_TYPE.FRONTEND, 
    },
    {
        title: 'Dielecpro',
        url: 'https://dielecpro-development.netlify.app/#', 
        image: '/projects/dielecpro.jpg',
        description: 'Dielecpro is an ongoing website project for an electrical company based in El Salvador. The project involves end-to-end design, development, and deployment of a responsive website tailored to showcase the company\'s services and expertise. The frontend is developed using Vue 3, delivering a modern and professional online presence for the client.',
        tech: ['Html', 'Css', 'Javascript' ,'Vue 3'],
        type: PROJECT_TYPE.FRONTEND,  
    },
];

export default projects;
