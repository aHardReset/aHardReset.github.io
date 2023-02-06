import { useState } from 'react';
import data from '../assets/data/renderData';

import './assets/styles/Home.css';
import './assets/styles/Cover.css';
import './assets/styles/HeroSection.css';
import './assets/styles/ContactInfo.css';
import './assets/styles/AboutMe.css';
import './assets/styles/Skills.css';
import './assets/styles/WorkExperience.css';
import './assets/styles/PortfolioProjects.css';
import './assets/styles/BlogPosts.css';

const loadMoreDefault = false;

const getLinkedInUrl = () => {
  const linkedInUrl = data.contactInfo.find(
    (item: { name: string }) => item.name === 'LinkedIn'
  );
  return linkedInUrl.url;
};

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 className='hero-name'>Your Name</h1>
      <h2 className='hero-title'>Software Engineer</h2>
    </div>
  );
}

function Cover() {
  const cover = data.cover;
  return (
    <div className='cover'>
      <div className='cover-text'>
        <div className='name'>{cover.name}</div>
        <div className='title'>{cover.title}</div>
      </div>
    </div>
  );
}

function AboutMe() {
  const aboutMe = data.aboutMe;
  return (
    <div className='common-container about-me-container'>
      <div className='about-me'>
        <div className='about-me-container'>
          <img src={aboutMe.image} alt='about me' className='about-me-img' />
          <div className='about-me-text-container'>
            <p>{aboutMe.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfo() {
  const contactInfo = data.contactInfo;
  return (
    <div id='contact-info' className='common-container'>
      <div className='common-container-header-container'>
        <h3 className='common-container-header'>Get in touch</h3>
      </div>
      <div className='contact-info-grid'>
        {contactInfo.map((item: any, it: number) => (
          <a href={item.url} key={item.name + it}>
            <div className='contact-info-item'>
              <img src={item.icon} alt={item.name} />

              <a className='contact-info-name'>{item.name}</a>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

/*
TODO:
- Delete button on press
- Accordion animation on press
- Change date string to date object
*/

function WorkExperience() {
  const [loadMore, setLoadMore] = useState(loadMoreDefault);

  const workExperience = data.workExperience;

  const toggleLoadMoreExperience = () => {
    setLoadMore(!loadMore);
  };
  return (
    <div id='work-experience' className='common-container'>
      <div className='common-container-header-container'>
        <h3 className='common-container-header'>Experience</h3>
      </div>
      <div className='experience-content common-container-desktop'>
        {workExperience
          .slice(0, loadMore ? workExperience.length : 3)
          .map((item: any) => (
            <div key={item.companyName} className='work-item'>
              <img
                src={item.companyLogo}
                alt={item.companyName}
                className='company-logo'
              />
              <div className='work-info'>
                <div className='company-name'>{item.companyName}</div>
                <div className='headline-time-window'>
                  <div className='headline'>{item.headline}</div>
                  <div className='time-window'>{item.timeWindow}</div>
                </div>

                <div className='description'>{item.description}</div>
              </div>
            </div>
          ))}
        {/* workExperience.length > 3 && !loadMore && ( */}
        {workExperience.length > 3 && (
          <div
            onClick={toggleLoadMoreExperience}
            className='toggle-load-more-experience-container'
          >
            <a className='toggle-load-more-experience'>Load More Experience</a>
          </div>
        )}
      </div>
    </div>
  );
}

function PortfolioProject({ name, image, description, techStack, url }: any) {
  return (
    <div className='portfolio-project'>
      <h3>{name}</h3>
      <img src={image} alt={`${name} project screenshot`} />
      <p>{description}</p>
      <ul>
        {techStack.map((tech: any, index: number) => (
          <li className='stackItem' key={index}>
            {tech}
          </li>
        ))}
      </ul>
      <div className='portfolio-project-buttons-container'>
        <a
          className='common-primary-button portfolio-project-buttons'
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Visit project
        </a>
        <a
          className='common-secondary-button portfolio-project-buttons'
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Browse source code
        </a>
      </div>
    </div>
  );
}

function PortfolioProjects() {
  const portfolioProjects = data.portfolioProjects;
  return (
    <div
      id='portfolio-projects'
      className='common-container portfolio-projects-container'
    >
      <div className='common-container-header-container'>
        <h3 className='common-container-header'>Portfolio Projects</h3>
      </div>
      <div className='portfolio-projects common-container-desktop'>
        <div className='portfolio-projects'>
          {portfolioProjects.map((project: any, index: number) => (
            <PortfolioProject key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ReadMyBlog = () => {
  return (
    <div id='blog-posts' className='common-container read-my-blog-container'>
      <div className='common-container-header-container'>
        <h3 className='common-container-header'>Blog</h3>
      </div>
      <div className='read-my-blog-button-container common-container-desktop'>
        <a
          href='https://medium.com/@aarongaribay'
          target='_blank'
          rel='noreferrer'
        >
          <div className='read-my-blog-button'>Read My Blog</div>
        </a>
      </div>
    </div>
  );
};

function Skills() {
  const skills = data.skills;

  return (
    <div id='skills' className='common-container'>
      <div className='common-container-header-container'>
        <h3 className='common-container-header'>Skills</h3>
      </div>
      <div className='skills'>
        <div className='skills-grid'>
          {skills.map((skill: any) => (
            <div className='skill-card' key={skill.name}>
              <img src={skill.image} alt={skill.name} />
              <p className='skill-footer'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Home() {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='home'>
      <Cover />
      <AboutMe />
      <ContactInfo />
      <WorkExperience />
      <PortfolioProjects />
      <Skills />
      <ReadMyBlog />
    </div>
  );
}

export default Home;
