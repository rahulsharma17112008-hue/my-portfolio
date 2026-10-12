export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  topics: string[];
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: { name: string; level: string; iconName: string }[];
}

export const PORTFOLIO_DATA = {
  developer: {
    name: 'Rahul Sharma',
    role: 'Full-Stack & Frontend Developer',
    tagline: 'Building high-performance web applications with modern TypeScript, React, and Supabase.',
    email: 'rahulsharma17112008@gmail.com',
    github: 'https://github.com/rahulsharma17112008-hue',
    githubUsername: 'rahulsharma17112008-hue',
    linkedin: 'https://www.linkedin.com/in/rahul-sharma-b12715433/',
    linkedinUsername: 'rahul-sharma-b12715433',
    avatarUrl: 'https://avatars.githubusercontent.com/u/278619962?v=4',
    location: 'India',
    status: 'Available for opportunities',
    bio: 'Software engineer with expertise in building responsive, interactive, and robust web applications. Passionate about end-to-end frontend craftsmanship, type-safe architectures with TypeScript, and seamless cloud integration with Supabase. Creator of Code Quest, an interactive technical assessment platform.',
  },
  featuredProject: {
    id: 'code-quest',
    title: 'Code Quest',
    tagline: 'Interactive coding quiz website for developers',
    description:
      'A comprehensive web application designed for software engineers and students to test and sharpen their algorithmic and language skills across C++, Python, JavaScript, and DSA. Features real-time scoring, comprehensive question explanations, cloud persistence via Supabase, and a dark/light responsive interface.',
    liveUrl: 'https://code-queust.vercel.app',
    githubUrl: 'https://github.com/rahulsharma17112008-hue/code-queust',
    technologies: [
      'React 19',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'Vite',
      'Lucide React',
    ],
    metrics: [
      { label: 'Supported Domains', value: '4 Languages & DSA' },
      { label: 'Question Bank', value: '80+ Questions' },
      { label: 'Cloud Backend', value: 'Supabase Database' },
      { label: 'Deployment', value: 'Vercel Production' },
    ],
    features: [
      'Multi-domain quiz system: JavaScript, Python, C++, and Data Structures & Algorithms',
      'Instant result calculation with accuracy percentages and in-depth answer explanations',
      'User authentication, session tracking, and historical quiz analytics with Supabase',
      'Local-to-cloud history synchronization and migration for guest and authenticated sessions',
      'Modern, highly accessible interface with seamless dark & light theme modes',
    ],
    topics: ['JavaScript', 'Python', 'C++', 'DSA'],
  } as Project,
  skillCategories: [
    {
      name: 'Frontend Development',
      description: 'Building fast, accessible, and reactive user interfaces',
      skills: [
        { name: 'TypeScript', level: 'Advanced', iconName: 'FileCode2' },
        { name: 'React 19', level: 'Advanced', iconName: 'Atom' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', iconName: 'Code2' },
        { name: 'Tailwind CSS', level: 'Proficient', iconName: 'Palette' },
        { name: 'HTML5 / Semantic Web', level: 'Proficient', iconName: 'Layout' },
        { name: 'Responsive UI / UX', level: 'Proficient', iconName: 'Smartphone' },
      ],
    },
    {
      name: 'Backend & Cloud Services',
      description: 'Cloud databases, authentication workflows, and API consumption',
      skills: [
        { name: 'Supabase', level: 'Proficient', iconName: 'Database' },
        { name: 'PostgreSQL Basics', level: 'Intermediate', iconName: 'Server' },
        { name: 'User Authentication', level: 'Proficient', iconName: 'ShieldCheck' },
        { name: 'REST APIs & Fetch', level: 'Proficient', iconName: 'Network' },
      ],
    },
    {
      name: 'Core Languages & Problem Solving',
      description: 'Foundational computer science principles and programming paradigms',
      skills: [
        { name: 'C++', level: 'Intermediate', iconName: 'Cpu' },
        { name: 'Python', level: 'Intermediate', iconName: 'Terminal' },
        { name: 'Data Structures & Algorithms', level: 'Intermediate', iconName: 'Binary' },
      ],
    },
    {
      name: 'Tooling & Deployment',
      description: 'Modern development workflows, linting, and build automation',
      skills: [
        { name: 'Vite', level: 'Proficient', iconName: 'Zap' },
        { name: 'Git & GitHub', level: 'Proficient', iconName: 'GitBranch' },
        { name: 'Vercel Deployment', level: 'Proficient', iconName: 'CloudUpload' },
        { name: 'Oxlint / Code Quality', level: 'Proficient', iconName: 'CheckCircle2' },
      ],
    },
  ] as SkillCategory[],
};
