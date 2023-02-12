import data from '../assets/data/renderData';

import './assets/styles/Footer.css';

function Footer() {
  const formalInfo = data.contactCards;
  const githubRepoInfo = data.githubRepoInfo;
  return (
    <div className='footer-container'>
      <footer className='footer common-container-desktop'>
        <div className='footer-left'>
          {formalInfo.map(info => (
            <a href={info.url} key={info.name}>
              <info.icon className='footer-icon' />
              <p className='footer-link-text'>{info.name}</p>
            </a>
          ))}
        </div>
        <div className='footer-right'>
          <a href={githubRepoInfo.url} className='footer-button'>
            {(githubRepoInfo.name || 'View') + ' Source Code'}
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
