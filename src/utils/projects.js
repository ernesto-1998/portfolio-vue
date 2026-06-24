import PROJECT_TYPE from '@/enums/project-type.js'

const projects = [
  {
  title: 'Financial Analytics Engine',
  url: 'https://github.com/ernesto-1998/financial-watcher',
  image: '/projects/financial-watcher.png',
  description:
    'A backend-focused financial analytics platform for ingesting market data, processing time-series events, calculating technical indicators, evaluating alert rules, and exposing results through REST, WebSocket, and observability dashboards. Built as a modular Node.js and TypeScript monolith with independent API, ingestion, processing, and alerts workers using Fastify, BullMQ, Redis, PostgreSQL/TimescaleDB, Prometheus, and Grafana.',
  tech: [
    {
      name: 'node',
      text: 'Node.js'
    },
    {
      name: 'ts',
      text: 'TypeScript'
    },
    {
      name: 'fastify',
      text: 'Fastify'
    },
    {
      name: 'redis',
      text: 'BullMQ'
    },
    {
      name: 'postgres',
      text: 'PostgreSQL'
    },
    {
      name: 'timescale',
      text: 'TimescaleDB'
    },
    {
      name: 'redis',
      text: 'Redis'
    },
    {
      name: 'swagger',
      text: 'Swagger'
    },
    {
      name: 'prometheus',
      text: 'Prometheus'
    },
    {
      name: 'grafana',
      text: 'Grafana'
    },
    {
      name: 'docker',
      text: 'Docker'
    },
    {
      name: 'docker',
      text: 'Docker Compose'
    },
    {
      name: 'git',
      text: 'Git'
    }
  ],
  type: PROJECT_TYPE.BACKEND
},
  {
  title: 'Recipe Sharing Rest API',
  url: 'https://github.com/ernesto-1998/recipe-sharing-nestapp',
  image: '/projects/recipes-nest-rest-api.png',
  description:
    "A NestJS RESTful API with a modular architecture for sharing and managing cooking recipes. Features JWT + OAuth2 (Google) authentication, role-based access control, and privacy settings. Recipes support categories, ingredients, tags, and images with paginated search. Includes comments and ratings. Dual-database (MongoDB + PostgreSQL) connected via RabbitMQ for event-driven logging with async context tracking. Fully documented with Swagger and containerized with Docker. STILL IN DEVELOPMENT.",
  tech: [
    {
      name: 'nest',
      text: 'NestJS'
    },
    {
      name: 'node',
      text: 'Node.js'
    },
    {
      name: 'ts',
      text: 'TypeScript'
    },
    {
      name: 'mongo',
      text: 'MongoDB'
    },
    {
      name: 'postgres',
      text: 'PostgreSQL'
    },
    {
      name: 'rabbitmq',
      text: 'RabbitMQ'
    },
    {
      name: 'swagger',
      text: 'Swagger'
    },
    {
      name: 'js',
      text: 'JWT Auth'
    },
    {
      name: 'oauth2',
      text: 'OAuth2'
    },
    {
      name: 'docker',
      text: 'Docker'
    },
    {
      name: 'git',
      text: 'Git'
    },
    {
      name: 'jest',
      text: 'Jest Testing'
    },
    {
      name: 'docker',
      text: 'Docker Compose'
    }
  ],
  type: PROJECT_TYPE.BACKEND
},
  {
    title: 'Los Palacios Bakery',
    url: 'https://los-palacios.netlify.app/',
    image: '/projects/panaderia-los-palacios.jpg',
    description:
      "The Los Palacios Bakery website project showcases my expertise in web development using TypeScript, CSS, HTML, and Vue 3. This project represents a comprehensive showcase of frontend technologies applied to a bakery's digital presence. Using Vue 3, I crafted an engaging and responsive user interface that highlights Los Palacios Bakery's unique offerings. TypeScript provided strong typing and improved development efficiency, ensuring robust code quality. CSS was utilized to create visually appealing layouts and styles, enhancing the bakery's brand identity on the web.",
    tech: [
      {
        name: 'html5',
        text: 'HTML5'
      },
      {
        name: 'css3',
        text: 'CSS3'
      },
      {
        name: 'ts',
        text: 'Typescript'
      },
      {
        name: 'vue',
        text: 'Vue 3'
      },            
      {
        name: 'vue',
        text: 'Vue Router'
      },  
      {
        name: 'git',
        text: 'Git'
      }
    ],
    type: PROJECT_TYPE.FRONTEND
  },
  {
    title: 'Videogame Rest Api',
    url: 'https://github.com/ernesto-1998/Videogame-Marketplace-Rest-Api',
    image: '/projects/videogame-rest-api.jpg',
    description:
      "A RESTful API for a Videogame Marketplace/Store. This API includes user authentication, CRUD operations for managing games, and powerful filtering capabilities to retrieve specific game data based on various criteria. It's built using Node.js, Express.js, PostgreSQL, MongoDB, Docker, and other technologies.",
    tech: [
      {
        name: 'node',
        text: 'Node'
      },
      {
        name: 'postgres',
        text: 'Postgres'
      },
      {
        name: 'mongo',
        text: 'MongoDB'
      },
      {
        name: 'git',
        text: 'Git'
      },
      {
        name: 'docker',
        text: 'Docker'
      },
      {
        name: 'docker',
        text: 'Docker Compose'
      },
      {
        name: 'linux',
        text: 'Linux'
      },
      {
        name: 'express',
        text: 'Express'
      },
      {
        name: 'express',
        text: 'Express Validator'
      },
      {
        name: 'express',
        text: 'Express Session'
      },
      {
        name: 'express',
        text: 'Bcrypt'
      },
    ],
    type: PROJECT_TYPE.BACKEND
  },
  {
    title: 'SmartStore SV',
    url: 'https://smartstoresv.netlify.app/',
    image: '/projects/smart-store.jpeg',
    description:
      'SmartStore SV is a comprehensive online marketplace dedicated to selling smartphones. It offers a seamless user experience with robust features like user authentication, advanced filtering options, and personalized CRUD functionalities for managing user listings. The frontend is developed using Vue 3 with Quasar framework, integrated with Firebase for backend services, including user management and data storage.',
    tech: [
      {
        name: 'html5',
        text: 'HTML5'
      },
      {
        name: 'css3',
        text: 'CSS3'
      },
      {
        name: 'js',
        text: 'Javascript'
      },
      {
        name: 'vue',
        text: 'Vue'
      },      
      {
        name: 'vue',
        text: 'Quasar'
      },  
      {
        name: 'vue',
        text: 'Pinia'
      },      
      {
        name: 'vue',
        text: 'Vue Router'
      },  
      {
        name: 'firebase',
        text: 'Firebase'
      },
      {
        name: 'oauth2',
        text: 'OAuth2'
      },
      {
        name: 'git',
        text: 'Git'
      }
    ],
    type: PROJECT_TYPE.FULLSTACK
  },
  {
    title: 'VirtualDoc',
    url: 'https://virtualdoc.netlify.app/',
    image: '/projects/virtualdoc.jpg',
    description:
      'VirtualDoc is a comprehensive web application tailored for medical professionals, clinics, and healthcare providers. It facilitates patient management, prescription creation, appointment scheduling, and advanced patient filtering capabilities. The app ensures top-tier security practices and offers a seamless user experience. Built with Vue 2 and Quasar framework, integrated with Firebase for backend services.',
      tech: [
        {
          name: 'html5',
          text: 'HTML5'
        },
        {
          name: 'css3',
          text: 'CSS3'
        },
        {
          name: 'js',
          text: 'Javascript'
        },
        {
          name: 'vue',
          text: 'Vue 2'
        },      
        {
          name: 'vue',
          text: 'Quasar'
        },  
        {
          name: 'vue',
          text: 'Pinia'
        },      
        {
          name: 'vue',
          text: 'Vue Router'
        },  
        {
          name: 'firebase',
          text: 'Firebase'
        },
        {
          name: 'git',
          text: 'Git'
        }
      ],
    type: PROJECT_TYPE.FULLSTACK
  },
  {
    title: 'Software Contable',
    url: 'https://anfdelsur.netlify.app',
    image: '/projects/software-contable.jpg',
    description:
      'Software Contable is a powerful financial analysis tool designed for desktop usage. It provides detailed financial insights by analyzing 10 financial statements, generating key financial ratios, vertical and horizontal analysis, and DuPont analysis. The intuitive interface includes interactive graphics to visualize financial data. Developed with Vue 3 and Quasar framework for a modern user experience.',
      tech: [
        {
          name: 'html5',
          text: 'HTML5'
        },
        {
          name: 'css3',
          text: 'CSS3'
        },
        {
          name: 'js',
          text: 'Javascript'
        },
        {
          name: 'vue',
          text: 'Vue'
        },      
        {
          name: 'vue',
          text: 'Quasar'
        },  
        {
          name: 'vue',
          text: 'Pinia'
        },      
        {
          name: 'vue',
          text: 'Vue Router'
        },  
        {
          name: 'firebase',
          text: 'Firebase'
        },
        {
          name: 'git',
          text: 'Git'
        }
      ],
    type: PROJECT_TYPE.FRONTEND
  },
  {
    title: 'Dielecpro',
    url: 'https://dielecpro-development.netlify.app/#',
    image: '/projects/dielecpro.jpg',
    description:
      "Dielecpro is an ongoing website project for an electrical company based in El Salvador. The project involves end-to-end design, development, and deployment of a responsive website tailored to showcase the company's services and expertise. The frontend is developed using Vue 3, delivering a modern and professional online presence for the client.",
      tech: [
        {
          name: 'html5',
          text: 'HTML5'
        },
        {
          name: 'css3',
          text: 'CSS3'
        },
        {
          name: 'js',
          text: 'Javascript'
        },
        {
          name: 'vue',
          text: 'Vue'
        },            
        {
          name: 'vue',
          text: 'Vue Router'
        },  
        {
          name: 'git',
          text: 'Git'
        }
      ],
    type: PROJECT_TYPE.FRONTEND
  }
]

export default projects
