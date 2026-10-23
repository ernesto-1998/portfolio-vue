const works = [
  {
    company: 'Nice Ltd.',
    position: 'Software Engineer',
    duration: 'Jun. 2024 - Present',
    promotedAfterSixMonths: true,
    tech: [
      'Angular',
      'Typescript',
      'HTML',
      'CSS',
      'C#',
      '.NET',
      'MongoDB',
      'SQL Server',
      'SASS',
      'Git',
      'Postgres'
    ],
    responsibilities: [
      'Fixed an SVG library memory leak caused by retained references blocking garbage collection; built a release utility, cutting browser memory use by 30–50% (before/after measurements with browser DevTools).',
      'Cut average operation time on legacy servers from ~1 minute to under 3 seconds (login included): fixed code that assumed Redis was available, using in-memory cache only to avoid failed Redis requests.',
      'Fixed a long-standing dayOfWeek filter bug that hid data for some days despite correct MongoDB aggregation results, using an algorithm to reorder BSON documents for faster sorting and data assignment.',
      'Investigated missing gamification rewards: audited PostgreSQL logs and SQL Server tables to reconstruct reward history, then wrote queries to restore the missing rewards.',
      'Traced metric discrepancies across user hierarchies through logs, API endpoints, database records, and business rules; maintained widgets, wallboards, dashboards, and forms/coaching admin panels.',
      'Participated in technical sessions with customers and Tier 2 support, explaining implemented fixes and complex product behavior to support troubleshooting and knowledge transfer.',
      'Provided after-hours production release support during overnight deployments coordinated by DevOps, validating application functionality, identifying regressions, and reporting issues to the teams involved.'
    ]
  },
  {
    company: 'GoLance inc.',
    position: 'Frontend Developer',
    duration: 'Jul. 2023 - Sept. 2023 (Intership)',
    tech: [
      'Html',
      'Css',
      'Javascript',
      'Tailwind',
      'Vue 2',
      'Vuex',
      'Uikit',
      'handlebars',
      'git',
      'github flow'
    ],
    responsibilities: [
      'Updated email templates for the goLance core application with new designs.',
      'Fixed visual issues, from text overflow in forms to complex component behavior.',
      'Migrated entire pages to a more modern design, updating components and improving UI consistency.'
    ]
  }
]

export default works
