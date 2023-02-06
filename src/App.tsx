import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Footer from './footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/App.css';
import './navbar/assets/scripts/navbar.js';



function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
