import { useState } from 'react';
import { FaMedium } from 'react-icons/fa';
import data, {
  // PortfolioProject,
  Certification,
} from '../assets/data/renderData';

import './assets/styles/Home.css';
import './assets/styles/Cover.css';
import './assets/styles/HeroSection.css';
import './assets/styles/ContactInfo.css';
import './assets/styles/AboutMe.css';
import './assets/styles/Skills.css';
import './assets/styles/WorkExperience.css';
import './assets/styles/PortfolioProjects.css';
import './assets/styles/BlogPosts.css';
import './assets/styles/Certifications.css';

const loadMoreDefault = false;
const expandedIndexDefault = -1;

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
  const contactCards = data.contactCards;
  return (
    <div id='contact-info' className='common-container'>
      <div className='common-container-header-container'>
        <h3 className='common-container-header'>Get in touch</h3>
      </div>
      <div className='contact-info-grid'>
        {contactCards.map((item, it: number) => (
          <a
            href={item.url}
            key={item.name + it}
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='contact-info-item'>
              <item.icon className='contact-info-icon' />
              <p className='contact-info-name'>{item.name}</p>
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
*/

function WorkExperience() {
  const [loadMore, setLoadMore] = useState(loadMoreDefault);
  const [expandedIndex, setExpandedIndex] = useState(expandedIndexDefault);

  const workExperiences = data.workExperiences;

  const toggleLoadMoreExperience = () => {
    setLoadMore(!loadMore);
  };
  const toggleDescription = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };
  return (
    <div id='work-experience' className='common-container'>
      <div className='common-container-header-container'>
        <h3 className='common-container-header'>Experience</h3>
      </div>
      <div className='experience-content common-container-desktop'>
        {workExperiences
          .slice(0, loadMore ? workExperiences.length : 3)
          .map((item, index) => (
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
                  <div className='time-window'>
                    {`${item.startDate} - ${
                      item.endDate ? item.endDate : 'Present'
                    }`}
                  </div>
                </div>

                <div className='description'>
                  {expandedIndex === index || item.description.length <= 300
                    ? item.description
                    : `${item.description
                        .substring(0, 300)
                        .split(' ')
                        .slice(0, -1)
                        .join(' ')}... `}
                  {item.description.length > 300 &&
                    !(expandedIndex === index) && (
                      <a
                        onClick={() => toggleDescription(index)}
                        className='read-more'
                      >
                        Read More
                      </a>
                    )}
                </div>
              </div>
            </div>
          ))}
        {/* workExperiences.length > 3 && !loadMore && ( */}
        {workExperiences.length > 3 && !loadMore && (
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

/*
function PortfolioProjectComponent({
  name,
  image,
  description,
  techStack,
  url,
}: PortfolioProject) {
  return (
    <div className='portfolio-project'>
      <h3>{name}</h3>
      <img src={image} alt={`${name} project screenshot`} />
      <p>{description}</p>
      <ul>
        {techStack.map((tech, index) => (
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
          rel='noreferrer noopener'
        >
          Visit project
        </a>
        <a
          className='common-secondary-button portfolio-project-buttons'
          href={url}
          target='_blank'
          rel='noreferrer noopener '
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
          {portfolioProjects.map((project, index) => (
            <PortfolioProjectComponent
              key={project.name + index}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
*/

function CertificationComponent({ name, image, url }: Certification) {
  return (
    <div className='certification-card'>
      <img src={image} alt={`${name} certification brand logo`} />
      <div className='certification-button-container'>
        <p className='certification-footer'>{name}</p>
        <a
          className='common-primary-button'
          href={url}
          target='_blank'
          rel='noreferrer noopener'
        >
          <p className='certification-button-p'>
            {'See Certification Verification'}
          </p>
        </a>
      </div>
    </div>
  );
}

function Certifications() {
  const certifications = data.certifications;
  return (
    <div id='certifications' className='common-container'>
      <div className='common-container-header-container'>
        <h3 className='common-container-header'>Professional Certifications</h3>
      </div>
      <div className='certifications'>
        <div className='certifications-grid'>
          {certifications.map((certification, index) => (
            <CertificationComponent
              key={certification.name + index}
              {...certification}
            />
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
      <div className='certifications'>
        <div className='read-my-blog-button-container common-container-desktop'>
          <a
            href='https://medium.com/@aarongaribay'
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className='read-my-blog-button'>
              <div className='read-my-blog-button-icon'>
                <FaMedium />
              </div>
              Read My Blog
            </div>
          </a>
        </div>
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
          {skills.map(skill => (
            <div className='skill-card' key={skill.name}>
              <skill.icon.component
                className='skill-card-icon'
                {...skill.icon.customProps}
              />
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
      <Skills />
      <Certifications />
      <ReadMyBlog />
    </div>
  );
}

export default Home;
