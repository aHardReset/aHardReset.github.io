import Navbar from './navbar/Navbar';
import Home from './home/Home';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/App.css';
import './navbar/assets/scripts/navbar.js';

function Space() {
  const images = [];
  for (let i = 0; i < 5; i++) {
    images.push(
      <>
        <img
          src='https://kobaltsolutions.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-08-at-4.06.03-PM.png'
          alt='space'
        />
        <br />
      </>
    );
  }
  return (
    <div className='space'>
      {images.map(image => {
        return image;
      })}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Home />
        <Space />
      </div>
    </BrowserRouter>
  );
}

export default App;
