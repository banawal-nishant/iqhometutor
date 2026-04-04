import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FindTutor from './pages/FindTutor';
import Contact from './pages/Contact';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Sitemap from './pages/Sitemap';
import RegisterTutor from './pages/RegisterTutor';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import WhatsAppButton from './components/WhatsAppButton';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutors" element={<FindTutor />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/register-tutor" element={<RegisterTutor />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
