export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'My Projects', path: '/projects' },
  //{ name: 'My Blogs', path: '/blogs' },
  { name: 'Contact', path: '/contact' },
]

export const SKILLS_DATA = [
  {
    category: 'Core Languages',
    color: '#6C63FF',
    glow: 'rgba(108,99,255,0.6)',
    skills: [
      { name: 'JavaScript', img: '/images/js.png' },
      { name: 'HTML5',      img: '/images/html.png' },
      { name: 'CSS3',       img: '/images/css.png' },
    ],
  },
  {
    category: 'Frameworks',
    color: '#A855F7',
    glow: 'rgba(168,85,247,0.6)',
    skills: [
      { name: 'React.js',       img: '/images/react.png' },
      { name: 'Next.js',        img: '/images/nextjs.png' },
      { name: 'Redux Toolkit',  img: '/images/toolkit.png' },
    ],
  },
  {
    category: 'Styling',
    color: '#EC4899',
    glow: 'rgba(236,72,153,0.6)',
    skills: [
      { name: 'Tailwind CSS', img: '/images/tailwindcss.png' },
      { name: 'SASS/SCSS',    img: '/images/sass.png' },
      { name: 'Ant Design',   img: '/images/ant-design.png' },
      { name: 'MUI',          img: '/images/miui.png' },
    ],
  },
  {
    category: 'State & API',
    color: '#14B8A6',
    glow: 'rgba(20,184,166,0.6)',
    skills: [
      { name: 'Zustand',   img: '/images/zustand.png' },
      { name: 'REST API',  img: '/images/rest-api.png' },
      { name: 'Axios',     img: '/images/axios.png' },
    ],
  },
  {
    category: 'Tools & DevOps',
    color: '#F59E0B',
    glow: 'rgba(245,158,11,0.6)',
    skills: [
      { name: 'Git',     img: '/images/git.png' },
      { name: 'GitHub',  img: '/images/github.png' },
      { name: 'Webpack', img: '/images/webpack.png' },
      { name: 'Vite',    img: '/images/vite.png' },
    ],
  },
  {
    category: 'Additional',
    color: '#10B981',
    glow: 'rgba(16,185,129,0.6)',
    skills: [
      { name: 'Power BI',  img: '/images/powerbi.jpg' },
      { name: 'SAP BTP',   img: '/images/btp.png' },
      { name: 'MongoDB',   img: '/images/mongoDb.png' },
    ],
  },
]

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'CAINMAI Software & Export Services Pvt.Ltd',
    location: 'Chennai',
    period: 'Dec 2024 – Present',
    current: true,
    color: '#6C63FF',
    points: [
      'Built production-grade React.js and Next.js apps with Redux Toolkit',
      'Implemented SSR/SSG improving page load speed and SEO rankings',
      'Engineered reusable UI component libraries, reducing dev time by ~30%',
      'Led end-to-end project execution including code reviews and planning',
      'Integrated RESTful APIs using Axios for seamless data flow',
    ],
  },
  {
    id: 2,
    role: 'Associate Consultant – Power BI Developer',
    company: 'Savic Technology Pvt. Ltd',
    location: 'Chennai',
    period: 'Dec 2023 – Nov 2024',
    current: false,
    color: '#A855F7',
    points: [
      'Developed interactive web apps using React.js hooks for dynamic UI',
      'Built 10+ data-driven forms with robust validation logic',
      'Achieved 20% increase in user engagement through intuitive UI design',
      'Worked on SAP BTP/BAS mobile app and Power BI dashboard creation',
    ],
  },
    {
    id: 3,
    role: 'Web Developer',
    company: 'Sri Softwarez',
    location: 'Sivakasi',
    period: 'Apr 2021 – Feb 2022',
    current: false,
    color: '#abf755',
    points: [
      'At a time when I did not completed my degree🎓, I proactively stepped into the professional world through part-time opportunities, where I began developing static websites and building my foundational experience.',
    ],
  }
]

export const PROJECTS_DATA = [
  {
    title: 'MAI We Build Homes',
    company: 'CAINMAI Software',
    description:
      'AI-powered project management platform built with Next.js and Redux Toolkit, leveraging SSR for improved SEO and performance. Designed to streamline construction workflows and enhance user experience.',
    tech: ['Next.js', 'Redux Toolkit', 'Tailwind CSS', 'REST API'],
    color: '#6C63FF',
    demo: 'https://www.myproject.ai/',
    image: "/images/mai.jpg"
  },
  {
    title: 'Dragon Customer',
    company: 'CAINMAI Software',
    description:
      'A scalable customer portal with dynamic routing, lazy loading, and optimized Core Web Vitals. Focused on performance, usability, and seamless customer interaction.',
    tech: ['Next.js', 'Redux Toolkit', 'Tailwind CSS', 'REST API', 'Axios'],
    color: '#A855F7',
    demo: 'https://dragoncustomer.com/',
    image: "/images/dc.png",
  },
  {
    title: 'MAI Admin Portal',
    company: 'CAINMAI Software',
    description:
      'An internal admin dashboard for managing projects, users, and system operations with secure role-based access and efficient data handling.',
    tech: ['Next.js', 'Redux Toolkit', 'Tailwind CSS', 'REST API'],
    color: '#EC4899',
    demo: 'https://www.myproject.ai/',
    image: "/images/dc.png",
  },
  {
    title: 'MAI TV Dashboard',
    company: 'CAINMAI Software',
    description:
      'A real-time analytics dashboard displaying key business metrics using dynamic charts and live data integration for quick decision-making.',
    tech: ['Next.js', 'Redux Toolkit', 'Tailwind CSS', 'chart.js'],
    color: '#14B8A6',
    demo: 'https://analyze.myproject.ai/',
    image: "/images/dc.png",
  },
]
export const BLOGS_DATA = [
  {
    title: 'How React Changed the Way I Build UIs',
    date: 'March 2025',
    category: 'React',
    readTime: '5 min read',
    emoji: '⚛️',
    excerpt: 'A developer journey from vanilla JS to component-driven architecture — what clicked, what did not, and what I learned along the way.',
  },
  {
    title: 'Next.js SSR vs SSG: A Cricket Scoreboard Analogy',
    date: 'February 2025',
    category: 'Next.js',
    readTime: '6 min read',
    emoji: '🏏',
    excerpt: 'Think of SSG as a pre-match scorecard and SSR as a live scoreboard — both serve different innings of your app.',
  },
  {
    title: 'The Hidden Universe of CSS Grid',
    date: 'January 2025',
    category: 'CSS',
    readTime: '4 min read',
    emoji: '🌌',
    excerpt: 'Mastering CSS Grid is like charting constellations — once you see the patterns, layouts become effortless.',
  },
  {
    title: 'Power BI for Frontend Developers',
    date: 'December 2024',
    category: 'Power BI',
    readTime: '5 min read',
    emoji: '📊',
    excerpt: 'How I crossed over from writing React components to building enterprise dashboards — the full story.',
  },
]