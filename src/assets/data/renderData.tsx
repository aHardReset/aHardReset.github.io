import { FaLinkedin, FaAt, FaUserAlt } from 'react-icons/fa';

import HarvardLogo from '../images/HarvardBusinessSO.jpg';
import SothwestLogo from '../images/SouthwestAirlines.jpg';
import TeradataLogo from '../images/Teradata.jpg';
import AMLogo from '../images/AM.jpg';
import IntegranetLogo from '../images/Integranet.jpg';
import ProfilePicture from '../images/ProfilePicture.jpeg';
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
  image: ProfilePicture,
  text: "I'm an experienced software engineer with +4 years in the field. Proficient in Python for backend development, frontend and cloud technologies. Part of international, English-speaking teams using agile methodologies to deliver production-ready software to top S&P 500 companies. Skilled in green field and brown field environments.",
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
    url: 'https://docs.google.com/document/d/1ghcsS1Z06mpA8VnRaP4UF2BKhNtOXS3naB30l02qGAk/edit?usp=sharing',
    name: 'Resume',
  },
];
const workExperiences: WorkExperience[] = [
  {
    companyLogo: HarvardLogo,
    companyName: 'Harvard Business School Online',
    headline: 'Software Engineer',
    startDate: 'Nov 2022',
    description:
      'I am currently working as a backend developer using the Django framework and Python, and also contributing to testing and frontend development with Vue.js and JavaScript.',
  },
  {
    companyLogo: SothwestLogo,
    companyName: 'Southwest Airlines',
    headline: 'Software Engineer',
    startDate: 'Mar 2022',
    endDate: 'Nov 2022',
    description:
      'During my time at Southwest Airlines, I was focused on improving the efficiency and productivity of the team. I achieved this by leveraging cloud technology and utilizing Amazon Web Services such as VPC, EC2, and Cloud Formation. I developed re-usable modules and implemented automatic IP allocation, resulting in significant time savings for the team. My expertise in Python, AWS, and Agile methodologies was crucial in delivering these successful projects.',
  },
  {
    companyLogo: TeradataLogo,
    companyName: 'Teradata',
    headline: 'Software Engineer',
    startDate: 'May 2021',
    endDate: 'Apr 2022',
    description:
      'At Teradata, I was focused on streamlining processes and improving customer satisfaction. I achieved this by designing and implementing an automatic rule using Python, which saved 120,000 hours annually in the diagnosis of troubleshooting customer nodes. I also fully automated data extraction and parsing, saving an additional 60,000 hours annually. Through my work, I developed a recommendation system for troubleshooting customer nodes, saving an additional 120,000 hours in research. I also streamlined CI pipelines, saving 390 hours annually for refreshing business intelligence databases and dashboards. My expertise in Python, Agile methodologies, and data structures was crucial in delivering these successful projects.',
  },
  {
    companyLogo: AMLogo,
    companyName: 'Artificial Makers',
    headline: 'Software Engineer',
    startDate: 'Mar 2020',
    endDate: 'May 2021',
    description:
      'As part of a 4-person initiative, I contributed to the development of AR/VR/AI applications with cloud service integrations, integrating geodata APIs and cloud database services in AR/VR android apps using C#, Firestore, and AWS S3 within a Unity3D environment. I also developed an end-to-end intelligent document parser using cloud cognitive services and Python, fine-tuning the AI detection for the tool, which is still being used in the supply chain industry today.',
  },
  {
    companyLogo: IntegranetLogo,
    companyName: 'Integranet',
    headline: 'IoT Leader Engineer',
    startDate: 'Feb 2019',
    endDate: 'Mar 2020',
    description:
      'At Integranet, I was involved in improving the lifetime and quality of agricultural products by 10% and 8% respectively. This was achieved through the programming and design of an IoT monitoring system that automates cooling systems using technologies such as JavaScript, Python, and AWS services.',
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
    name: 'AWS',
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
  /*
  {
    name: 'PortfolioProjects',
    label: 'See My Portfolio Projects',
    anchor: '#portfolio-projects',
  },
  */
  {
    name: 'Certifications',
    label: 'My Professional Certifications',
    anchor: '#certifications',
  },
  {
    name: 'Skills',
    label: 'Look To My Skill Set',
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
