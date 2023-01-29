import { Link } from 'react-router-dom';
import './assets/styles/Navbar.css';

function NavbarLeft() {
  return (
    <div className='left-section'>
      <Link to='/'>
        <img
          src='https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png'
          alt='logo'
          className='logo'
        />
      </Link>
    </div>
  );
}

function NavbarCenter() {
  return (
    <div className='center-section'>
      <input
        type='text'
        className='search-bar'
        placeholder='Search'
        value=' Search bar '
      />
    </div>
  );
}

function NavbarRight() {
  return (
    <div className='right-section'>
      <Link
        to='/'
        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
      >
        Home
      </Link>
      <Link
        to='/about'
        className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
      >
        About
      </Link>
      <Link
        to='/portfolio'
        className={`nav-link ${
          location.pathname === '/portfolio' ? 'active' : ''
        }`}
      >
        Portfolio
      </Link>
      <Link
        to='/blog'
        className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}
      >
        Blog
      </Link>
    </div>
  );
}

// @ts-ignore
function Navbar() {

  return (
    <nav className='navbar'>
      <NavbarLeft />
      <NavbarCenter />
      <NavbarRight />
    </nav>
  );
}

export default Navbar;
