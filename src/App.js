
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AOS from "aos";
import './styles/App.css';

import Home from './pages/Home';
import About from './pages/About';
// import Courses from 'https://training.usconcealedcarry.com/instructor/403f6128-6d56-11eb-aad4-02420a020192';
// import Coaching from './pages/Coaching';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

// import Nav from './components/Nav';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Router>
        <main>
          <Navbar />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/courses" element={<Courses />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
