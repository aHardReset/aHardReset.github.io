import React, { useState } from 'react';
import data from './assets/data/renderData';

import './assets/styles/Home.css';
import './assets/styles/WorkExperience.css';

const loadMoreDefault = false;

const getLinkedInUrl = () => {
  const linkedInUrl = data.contactInfo.find((item: { name: string; }) => item.name === 'LinkedIn');
  return linkedInUrl.url;
};

function Cover() {
  const cover = data.cover;
  return (
    <div className='cover' style={{ backgroundImage: `url(${cover.image})` }}>
      <div className='name'>{cover.name}</div>
      <div className='title'>{cover.title}</div>
    </div>
  );
}

function AboutMe() {
  const aboutMe = data.aboutMe;
  return (
    <div className='about-me'>
      <div className='about-me-container'>
        <img src={aboutMe.image} alt='about me' className='about-me-img' />
        <p>{aboutMe.text}</p>
      </div>
    </div>
  );
}

function ContactInfo() {
  const contactInfo = data.contactInfo;
  return (
    <div className='contact-info'>
      <h3>Get in touch</h3>
      <div className='contact-info-grid'>
        {contactInfo.map((item: any, it: number) => (
          <a href={item.url} key={item.name + it}>
            <div className='contact-info-item'>
              <img src={item.icon} alt={item.name} />

              <span className='contact-info-name'>{item.name}</span>
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
  const linkedInUrl = getLinkedInUrl();

  const toggleLoadMoreExperience = () => {
    setLoadMore(!loadMore);
  };
  return (
    <div className='work-experience'>
      <div className='experience-header'>
        <h3 className='section-header'>
          {loadMore ? 'Full Experience' : 'Recent Experience'}
        </h3>
      </div>
      <div className='experience-content'>
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
          <button
            onClick={toggleLoadMoreExperience}
            className='toggle-load-more-experience-button'
          >
            Load More Experience
          </button>
        )}
        <div className='links'>
          <a href={linkedInUrl} className='linkedin-link'>
            Go to LinkedIn
          </a>
          <a href='/resume' className='resume-link'>
            See Full Resume
          </a>
        </div>
      </div>
    </div>
  );
}
/*
function ReadMore(linkedInUrl, resumeUrl) {
  return (
    <div className='read-more'>
      <a href={linkedInUrl}>Visit my LinkedIn</a>
      <a href={resumeUrl}>See my full resume</a>
    </div>
  );
}

function Skills(skills) {
  return (
    <div className='skills'>
      {skills.map(item => (
        <img src={item.icon} alt={item.name} key={item.name} />
      ))}
    </div>
  );
}

*/

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
    </div>
  );
}

export default Home;
