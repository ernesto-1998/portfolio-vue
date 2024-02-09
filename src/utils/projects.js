import PROJECT_TYPE from "@/enums/project-type.js"

const projects = [
    {
        title: "Videogame Rest Api",
        url: "https://github.com/ernesto-1998/Videogame-Marketplace-Rest-Api",
        image: "/projects/videogame-rest-api.jpg",
        description: "A Rest Api of a Videogame Marketplace/Store, it has user authentication, CRUD operations and filters querys",
        tech: ["nodejs", "express", "postgres", "mongodb", "express-session", "express-validator", "bcrypt", "docker", "docker compose"],
        type: PROJECT_TYPE.BACKEND,

    },
    {
        title: 'SmartStore SV',
        url: 'https://smartstoresv.netlify.app/', 
        image: '/projects/smart-store.jpeg',
        description: 'A Marketplace created with the purpose of sell smartphones, it has user authentication, filters, CRUD caracteristics for every user adds...',
        tech: ['Html', 'Css', 'Javascript' ,'Vue 3', 'Quasar', 'Firebase', 'Pinia', 'Vue-router'],
        type: PROJECT_TYPE.FULLSTACK, 
    },
    {
        title: 'VirtualDoc',
        url: 'https://virtualdoc.netlify.app/', 
        image: '/projects/virtualdoc.jpg',
        description: 'A Web App created for doctors, nurses and clinics that allows users to store information about patients, create recipes, schedule appointments, filter patients, all with user authentication and best security practices',
        tech: ['Html', 'Css', 'Javascript' ,'Vue 2', 'Quasar', 'Firebase', 'Vue-router'],
        type: PROJECT_TYPE.FULLSTACK, 
    },
    {
        title: 'Software Contable',
        url: 'https://anfdelsur.netlify.app', 
        image: '/projects/software-contable.jpg',
        description: 'DESKTOP ONLY | A web app that performs a financial analysis of 10 financial statements (5 balance sheets and 5 income statements) providing financial ratios, vertical and horizontal analysis, as well as dupont analysis, all enhanced with graphics.',
        tech: ['Html', 'Css', 'Javascript' ,'Vue 3', 'Quasar', 'Vue-router'],
        type: PROJECT_TYPE.FRONTEND, 
    },
    {
        title: 'Dielecpro',
        url: 'https://dielecpro-development.netlify.app/#', 
        image: '/projects/dielecpro.jpg',
        description: 'A website project for an electrical company from El Salvador, this project involves the design, development and deployment of a website for the company. (Still in development)',
        tech: ['Html', 'Css', 'Javascript' ,'Vue 3'],
        type: PROJECT_TYPE.FRONTEND,  
    },
]

export default projects