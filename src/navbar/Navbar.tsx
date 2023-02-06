import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import data from '../assets/data/renderData';

import './assets/styles/Navbar.css';

const navigationAnchors = data.navigationAnchors;

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const Menu = () => {
    return (
      <div
        className={`navbar-menu-options-container ${
          isOpen ? 'show-navbar-menu' : ''
        }`}
      >
        <FaTimes className='navbar-close-menu' onClick={() => setOpen(false)} />
        <ul className='navbar-menu-options'>
          {navigationAnchors.map((anchor: any, index: number) => (
            <a
              key={anchor.name + index}
              onClick={() => setOpen(false)}
              href={`${anchor.anchor}`}
            >
              <li className='navbar-menu-option'>{anchor.label}</li>
            </a>
          ))}
          {/* Add more menu options as needed */}
        </ul>
      </div>
    );
  };

  return (
    <nav className='navbar'>
      <FaBars className='navbar-hamburger-menu' onClick={() => setOpen(true)} />
      <Menu />
      <div className='navbar-brand-logo'>
        <img
          src={
            'https://static.wikia.nocookie.net/manhunt/images/a/a3/Pickman_Project_logo.PNG/revision/latest/scale-to-width-down/200?cb=20160425001532&path-prefix=es'
          }
          alt='Logo'
        />
      </div>
    </nav>
  );
};

export default Navbar;
