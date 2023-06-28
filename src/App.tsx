/** @format */
import './App.scss';
import Navbar from './components/Navbar';
import About from './pages/AboutPage';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import VideoGrid from './pages/Portfolio/VideoGrid';
import AboutPage from './components/AboutPage';

const App = () => {
  return (
    <>
      <div className='wrapper text-center m-auto'>
        <header>
          <Navbar />
        </header>
        <HomePage />
        <AboutPage />
        <VideoGrid />
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default App;
