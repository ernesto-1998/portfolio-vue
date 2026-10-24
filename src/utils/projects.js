import PROJECT_TYPE from '@/enums/project-type.js'

const projects = [
  {
    title: 'Mapa Audit Platform',
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/ernesto-1998/mapa-audit',
        icon: 'github'
      },
      {
        label: 'View on npm',
        url: 'https://www.npmjs.com/package/@tnet06/mapa-audit-sdk',
        icon: 'npm'
      }
    ],
    image: '/projects/mapa-audit.png',
    summary:
      'Audit and business observability SDK for Node.js with automatic request context and pluggable transports.',
    description:
      'An audit and business observability SDK for Node.js, published on npm as @tnet06/mapa-audit-sdk. It provides automatic request context capture, a structured and typed audit event model, built-in payload masking and size limits, and pluggable transports. It includes adapters for Express, Fastify, and NestJS, console and file transports, and an optional RabbitMQ publisher transport.',
    features: [
      'Automatic request context capture for Express, Fastify, and NestJS',
      'Structured, typed audit events with payload masking and size limits',
      'Console, file, and optional RabbitMQ publisher transports'
    ],
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
        name: 'express',
        text: 'Express'
      },
      {
        name: 'fastify',
        text: 'Fastify'
      },
      {
        name: 'nest',
        text: 'NestJS'
      },
      {
        name: 'rabbitmq',
        text: 'RabbitMQ'
      },
      {
        name: 'code',
        text: 'Vitest'
      },
      {
        name: 'git',
        text: 'Git'
      }
    ],
    type: PROJECT_TYPE.PLATFORM
  },
  {
    title: 'Financial Analytics Engine',
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/ernesto-1998/financial-watcher',
        icon: 'github'
      }
    ],
    image: '/projects/financial-watcher.png',
    summary:
      'Backend platform for market data ingestion, time-series processing, technical indicators, and alerts.',
    description:
      'A backend-focused financial analytics platform for ingesting market data, processing time-series events, calculating technical indicators, evaluating alert rules, and exposing results through REST, WebSocket, and observability dashboards. Built as a modular Node.js and TypeScript monolith with independent API, ingestion, processing, and alerts workers using Fastify, BullMQ, Redis, PostgreSQL/TimescaleDB, Prometheus, and Grafana.',
    features: [
      'Market data ingestion and time-series event processing',
      'Technical indicators and alert rule evaluation',
      'REST and WebSocket results with observability dashboards'
    ],
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
        name: 'code',
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
        name: 'code',
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
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/ernesto-1998/recipe-sharing-nestapp',
        icon: 'github'
      }
    ],
    image: '/projects/recipes-nest-rest-api.png',
    summary:
      'Modular NestJS API for recipes with JWT and Google OAuth2 authentication, search, comments, and ratings.',
    description:
      'A NestJS RESTful API with a modular architecture for sharing and managing cooking recipes. Features JWT + OAuth2 (Google) authentication, role-based access control, and privacy settings. Recipes support categories, ingredients, tags, and images with paginated search. Includes comments and ratings. Dual-database (MongoDB + PostgreSQL) connected via RabbitMQ for event-driven logging with async context tracking. Fully documented with Swagger and containerized with Docker. STILL IN DEVELOPMENT.',
    features: [
      'JWT and Google OAuth2 authentication with role-based access',
      'Recipe search, categories, ingredients, tags, images, comments, and ratings',
      'Event-driven logging across MongoDB and PostgreSQL via RabbitMQ'
    ],
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
        name: 'code',
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
        name: 'code',
        text: 'Docker Compose'
      }
    ],
    type: PROJECT_TYPE.BACKEND
  },
  {
    title: 'Los Palacios Bakery',
    links: [{ label: 'Visit website', url: 'https://los-palacios.netlify.app/', icon: 'external' }],
    image: '/projects/panaderia-los-palacios.jpg',
    summary: 'Responsive bakery website highlighting Los Palacios Bakery and its offerings.',
    description:
      "The Los Palacios Bakery website project showcases my expertise in web development using TypeScript, CSS, HTML, and Vue 3. This project represents a comprehensive showcase of frontend technologies applied to a bakery's digital presence. Using Vue 3, I crafted an engaging and responsive user interface that highlights Los Palacios Bakery's unique offerings. TypeScript provided strong typing and improved development efficiency, ensuring robust code quality. CSS was utilized to create visually appealing layouts and styles, enhancing the bakery's brand identity on the web.",
    features: [
      'Responsive interface for the bakery’s digital presence',
      'Presentation of Los Palacios Bakery’s offerings'
    ],
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
        name: 'code',
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
    links: [
      {
        label: 'View on GitHub',
        url: 'https://github.com/ernesto-1998/Videogame-Marketplace-Rest-Api',
        icon: 'github'
      }
    ],
    image: '/projects/videogame-rest-api.jpg',
    summary: 'Videogame marketplace API with authentication, game management, and filtering.',
    description:
      "A RESTful API for a Videogame Marketplace/Store. This API includes user authentication, CRUD operations for managing games, and powerful filtering capabilities to retrieve specific game data based on various criteria. It's built using Node.js, Express.js, PostgreSQL, MongoDB, Docker, and other technologies.",
    features: [
      'User authentication',
      'CRUD operations for games',
      'Filtering to retrieve specific game data'
    ],
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
        name: 'code',
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
        name: 'code',
        text: 'Express Validator'
      },
      {
        name: 'code',
        text: 'Express Session'
      },
      {
        name: 'code',
        text: 'Bcrypt'
      }
    ],
    type: PROJECT_TYPE.BACKEND
  },
  {
    title: 'SmartStore SV',
    links: [{ label: 'Visit website', url: 'https://smartstoresv.netlify.app/', icon: 'external' }],
    image: '/projects/smart-store.jpeg',
    summary:
      'Smartphone marketplace with authentication, filtering, and personal listing management.',
    description:
      'SmartStore SV is a comprehensive online marketplace dedicated to selling smartphones. It offers a seamless user experience with robust features like user authentication, advanced filtering options, and personalized CRUD functionalities for managing user listings. The frontend is developed using Vue 3 with Quasar framework, integrated with Firebase for backend services, including user management and data storage.',
    features: [
      'User authentication',
      'Advanced smartphone filtering',
      'Create, edit, and manage personal listings'
    ],
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
        name: 'code',
        text: 'Quasar'
      },
      {
        name: 'code',
        text: 'Pinia'
      },
      {
        name: 'code',
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
    links: [{ label: 'Visit website', url: 'https://virtualdoc.netlify.app/', icon: 'external' }],
    image: '/projects/virtualdoc.jpg',
    summary:
      'Healthcare web app for patient management, prescriptions, appointments, and patient filtering.',
    description:
      'VirtualDoc is a comprehensive web application tailored for medical professionals, clinics, and healthcare providers. It facilitates patient management, prescription creation, appointment scheduling, and advanced patient filtering capabilities. The app ensures top-tier security practices and offers a seamless user experience. Built with Vue 2 and Quasar framework, integrated with Firebase for backend services.',
    features: [
      'Patient management and advanced filtering',
      'Prescription creation',
      'Appointment scheduling'
    ],
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
        name: 'code',
        text: 'Quasar'
      },
      {
        name: 'code',
        text: 'Pinia'
      },
      {
        name: 'code',
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
    links: [{ label: 'Visit website', url: 'https://anfdelsur.netlify.app', icon: 'external' }],
    image: '/projects/software-contable.jpg',
    summary:
      'Desktop-oriented financial analysis tool for statements, ratios, and interactive charts.',
    description:
      'Software Contable is a powerful financial analysis tool designed for desktop usage. It provides detailed financial insights by analyzing 10 financial statements, generating key financial ratios, vertical and horizontal analysis, and DuPont analysis. The intuitive interface includes interactive graphics to visualize financial data. Developed with Vue 3 and Quasar framework for a modern user experience.',
    features: [
      'Analysis of 10 financial statements',
      'Financial ratios and vertical, horizontal, and DuPont analysis',
      'Interactive graphics for financial data'
    ],
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
        name: 'code',
        text: 'Quasar'
      },
      {
        name: 'code',
        text: 'Pinia'
      },
      {
        name: 'code',
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
    links: [
      {
        label: 'Visit website',
        url: 'https://dielecpro-development.netlify.app/#',
        icon: 'external'
      }
    ],
    image: '/projects/dielecpro.jpg',
    summary: 'Responsive company website presenting Dielecpro’s electrical services and expertise.',
    description:
      "Dielecpro is an ongoing website project for an electrical company based in El Salvador. The project involves end-to-end design, development, and deployment of a responsive website tailored to showcase the company's services and expertise. The frontend is developed using Vue 3, delivering a modern and professional online presence for the client.",
    features: [
      'Responsive presentation of company services and expertise',
      'Design, development, and deployment for the client'
    ],
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
        name: 'code',
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
