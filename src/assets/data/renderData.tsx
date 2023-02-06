import linkedInIcon from '../images/linkedin-icon.svg';
import gmailIcon from '../images/gmail-icon.svg';
import teradataLogo from '../images/teradata-logo.jpg';

interface Skill {
  name: string;
  image: string;
  projects: string[];
}

const data: any = {};

data.cover = {
  image:
    'https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  name: 'Aaron Garibay',
  title: 'Software Engineer',
};
data.aboutMe = {
  image:
    'https://media.licdn.com/dms/image/D5603AQFa4ZWxN3-LcQ/profile-displayphoto-shrink_800_800/0/1664861701724?e=1680134400&v=beta&t=-sVNun90inowV41PddQpHzvSKqfwcpv2UAeFM_mW_bM',
  text: 'I am a software engineer with 5 years of experience in building scalable and high-performance web applications. I am proficient in JavaScript, React, and Node.js. I am also experienced in working with databases such as MySQL and MongoDB.',
};

data.contactInfo = [
  {
    icon: linkedInIcon,
    url: 'https://linkedin.com/in/aarongaribay',
    name: 'LinkedIn',
  },
  {
    icon: gmailIcon,
    url: 'mailto:hola@aarongaribay.com',
    name: 'Email',
  },
  {
    icon: 'https://static.vecteezy.com/system/resources/previews/002/205/865/original/employee-resume-icon-free-vector.jpg',
    url: 'https://drive.google.com/path/to/resume.pdf',
    name: 'Resume',
  },
];
data.workExperience = [
  {
    companyLogo: teradataLogo,
    companyName: 'Teradata',
    headline: 'Backend Developer',
    timeWindow: 'Jan 2020 - Present',
    description: "I'm a backend developer at Company 1.",
  },
  {
    companyLogo: teradataLogo,
    companyName: 'Teradata',
    headline: 'Backend Developer',
    timeWindow: 'Jan 2020 - Present',
    description: "I'm a backend developer at Company 1.",
  },
  {
    companyLogo: teradataLogo,
    companyName: 'Teradata',
    headline: 'Backend Developer',
    timeWindow: 'Jan 2020 - Present',
    description: "I'm a backend developer at Company 1.",
  },
  {
    companyLogo: teradataLogo,
    companyName: 'Teradata',
    headline: 'Backend Developer',
    timeWindow: 'Jan 2020 - Present',
    description: "I'm a backend developer at Company 1.",
  },
];

data.githubRepoInfo = {
  url: 'https://github.com/aHardReset/aHardReset.github.io',
};

data.portfolioProjects = [
  {
    name: 'Project 1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    description: 'This is a project that I worked on.',
    techStack: ['JavaScript', 'React', 'Node.js'],
    url: '',
    sourceCodeUrl: '',
  },
  {
    name: 'Project 2',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    description: 'This is a project that I worked on.',
    techStack: ['JavaScript', 'React', 'Node.js'],
    url: '',
    sourceCodeUrl: '',
  },
  {
    name: 'Project 3',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    description: 'This is a project that I worked on.',
    techStack: [
      'JavaScript',
      'React',
      'Node.js',
      'JavaScript',
      'React',
      'Node.js',
    ],
    url: '',
    sourceCodeUrl: '',
  },
  {
    name: 'Project 4',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    description: 'This is a project that I worked on.',
    techStack: ['JavaScript', 'React', 'Node.js'],
    url: '',
    sourceCodeUrl: '',
  },
];

const skills: Skill[] = [
  {
    name: 'JavaScript',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    projects: ['Project 1', 'Project 2', 'Project 3'],
  },
  {
    name: 'Python',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    projects: ['Project 4', 'Project 5', 'Project 6'],
  },
  {
    name: 'JavaScript',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    projects: ['Project 1', 'Project 2', 'Project 3'],
  },
  {
    name: 'Python',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    projects: ['Project 4', 'Project 5', 'Project 6'],
  },
  {
    name: 'JavaScript',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    projects: ['Project 1', 'Project 2', 'Project 3'],
  },
  {
    name: 'Python',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    projects: ['Project 4', 'Project 5', 'Project 6'],
  },
  {
    name: 'JavaScript',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
    projects: ['Project 1', 'Project 2', 'Project 3'],
  },
  {
    name: 'Python',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png',
    projects: ['Project 4', 'Project 5', 'Project 6'],
  },
];

data.skills = skills;

data.navigationAnchors = [
  {
    name: 'ContactInfo',
    label: 'Get in touch',
    anchor: '#contact-info',
  },
  {
    name: 'WorkExperience',
    label: 'My Work Experience',
    anchor: '#work-experience',
  },
  {
    name: 'PortfolioProjects',
    label: 'See My Portfolio Projects',
    anchor: '#portfolio-projects',
  },
  {
    name: 'Skills',
    label: 'Check My Skill Set',
    anchor: '#skills',
  },
  {
    name: 'BlogPosts',
    label: 'Read My Blog Posts',
    anchor: '#blog-posts',
  },
];

export default data;
