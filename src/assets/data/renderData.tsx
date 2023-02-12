import { FaLinkedin, FaAt, FaUserAlt, FaMedium } from 'react-icons/fa';

import HarvardLogo from '../images/HarvardBusinessSO.jpg';
import SothwestLogo from '../images/SouthwestAirlines.jpg';
import TeradataLogo from '../images/Teradata.jpg';
import AMLogo from '../images/AM.jpg';
import {
  SVGComponentProps,
  PythonColorFullSvg,
  JavaScriptSvg,
  DjangoSvg,
  ReactSvg,
  AWSSvg,
  DockerSvg,
  FlaskSvg,
  GoSvg,
  ExpressSvg,
  VueSvg,
  AzureSvg,
  FastApiSvg,
} from '../components/svgs';

import { IconType } from 'react-icons';
import React from 'react';

interface Cover {
  name: string;
  title: string;
}

interface AboutMe {
  image: string;
  text: string;
}

interface ContactCard {
  icon: IconType;
  url: string;
  name: string;
}

interface WorkExperience {
  companyLogo: string;
  companyName: string;
  headline: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface PortfolioProject {
  name: string;
  image: string;
  description: string;
  techStack: string[];
  url: string;
  sourceCodeUrl: string;
}

export interface Certification {
  name: string;
  image: string;
  url: string;
}

interface Skill {
  name: string;
  icon: {
    component: React.FC<SVGComponentProps>;
    customProps?: SVGComponentProps;
  };
  projects: string[];
}

interface GithubRepoInfo {
  url: string;
  name?: string;
}

interface NavigationAnchor {
  name: string;
  label: string;
  anchor: string;
}

interface RenderData {
  cover: Cover;
  aboutMe: AboutMe;
  contactCards: ContactCard[];
  workExperiences: WorkExperience[];
  portfolioProjects: PortfolioProject[];
  skills: Skill[];
  githubRepoInfo: GithubRepoInfo;
  navigationAnchors: NavigationAnchor[];
  certifications: Certification[];
}

const cover: Cover = {
  name: 'Aaron Garibay',
  title: 'Software Engineer',
};

const aboutMe: AboutMe = {
  image:
    'https://media.licdn.com/dms/image/D5603AQFa4ZWxN3-LcQ/profile-displayphoto-shrink_800_800/0/1664861701724?e=1680134400&v=beta&t=-sVNun90inowV41PddQpHzvSKqfwcpv2UAeFM_mW_bM',
  text: 'Software Engineer with +4 years of experience designing, and implementing customer-oriented, production-ready software with Python for Backend, and Cloud Technologies; Participating in international English-spoken organizations, experienced in green field, and brown field environments. I’ve released products used for top S&P 500 companies, this possible by being part of world-class software engineer teams using agile methodologies.',
};

const contactCards: ContactCard[] = [
  {
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/aarongaribay',
    name: 'LinkedIn',
  },
  {
    icon: FaAt,
    url: 'mailto:hola@aarongaribay.com',
    name: 'Email',
  },
  {
    icon: FaUserAlt,
    url: 'https://drive.google.com/path/to/resume.pdf',
    name: 'Resume',
  },
];
const workExperiences: WorkExperience[] = [
  {
    companyLogo: HarvardLogo,
    companyName: 'Harvard Business School Online',
    headline: 'Backend Developer',
    startDate: 'Nov 2022',
    description: "I'm a backend developer at Company 1.",
  },
  {
    companyLogo: SothwestLogo,
    companyName: 'Southwest Airlines',
    headline: 'Backend Developer',
    startDate: 'Jan 2020',
    endDate: 'Dec 2020',
    description: "I'm a backend developer at Company 1.",
  },
  {
    companyLogo: TeradataLogo,
    companyName: 'Teradata',
    headline: 'Backend Developer',
    startDate: 'Jan 2020',
    endDate: 'Dec 2020',
    description: "I'm a backend developer at Company 1.",
  },
  {
    companyLogo: AMLogo,
    companyName: 'Teradata',
    headline: 'Backend Developer',
    startDate: 'Jan 2020',
    endDate: 'Dec 2020',
    description: "I'm a backend developer at Company 1.",
  },
];

const githubRepoInfo: GithubRepoInfo = {
  url: 'https://github.com/aHardReset/aHardReset.github.io',
};

const portfolioProjects: PortfolioProject[] = [
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

const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    image:
      'https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
    url: 'https://www.credly.com/badges/e4ee4a36-86ac-4525-8aa6-98768974165a',
  },
  {
    name: 'Linux Professional Institute: Linux Essentials',
    image: 'https://www.lpi.org/sites/all/themes/lpi/images/logo.png',
    url: 'https://cs.lpi.org/caf/Xamman/certification/verify/LPI000511561/xng3csum9n',
  },
];

const skills: Skill[] = [
  {
    name: 'Python',
    icon: {
      component: PythonColorFullSvg,
    },
    projects: ['Project 1', 'Project 2', 'Project 3'],
  },
  {
    name: 'Django',
    icon: {
      component: DjangoSvg,
      customProps: {
        fill: '#092E20',
      },
    },
    projects: ['Project 7', 'Project 8', 'Project 9'],
  },
  {
    name: 'FastAPI',
    icon: {
      component: FastApiSvg,
    },
    projects: ['Project 7', 'Project 8', 'Project 9'],
  },
  {
    name: 'Flask',
    icon: {
      component: FlaskSvg,
    },
    projects: ['Project 7', 'Project 8', 'Project 9'],
  },
  {
    name: 'Express',
    icon: {
      component: ExpressSvg,
    },
    projects: ['Project 7', 'Project 8', 'Project 9'],
  },
  {
    name: 'Go',
    icon: {
      component: GoSvg,
    },
    projects: ['Project 7', 'Project 8', 'Project 9'],
  },
  {
    name: 'Amazon Web Services',
    icon: {
      component: AWSSvg,
    },
    projects: ['Project 1', 'Project 2', 'Project 3'],
  },
  {
    name: 'Microsoft Azure',
    icon: {
      component: AzureSvg,
    },
    projects: ['Project 1', 'Project 2', 'Project 3'],
  },
  {
    name: 'Docker',
    icon: {
      component: DockerSvg,
    },
    projects: ['Project 4', 'Project 5', 'Project 6'],
  },
  {
    name: 'JavaScript',
    icon: {
      component: JavaScriptSvg,
    },
    projects: ['Project 4', 'Project 5', 'Project 6'],
  },
  {
    name: 'React',
    icon: {
      component: ReactSvg,
    },
    projects: ['Project 7', 'Project 8', 'Project 9'],
  },
  {
    name: 'VueJs',
    icon: {
      component: VueSvg,
    },
    projects: ['Project 7', 'Project 8', 'Project 9'],
  },
];

const navigationAnchors: NavigationAnchor[] = [
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

const data: RenderData = {
  cover,
  aboutMe,
  contactCards,
  workExperiences,
  githubRepoInfo,
  portfolioProjects,
  skills,
  navigationAnchors,
  certifications,
};

export default data;
