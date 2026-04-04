import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 shadow-sm" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar for Inquiry */}
      <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem 0', fontSize: '0.9rem', fontWeight: '500' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem' }}>
          <a href="tel:+918817745099" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="pulse-text">
            <span style={{ fontSize: '1.1rem' }}>📞</span>
            <span>For Inquiry Call: <strong>+91 88177 45099</strong></span>
          </a>
        </div>
      </div>

      <div className="glass">
        <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
              IQ
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)' }}>
              <span style={{ color: 'var(--secondary)' }}>Home </span>Tutors
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
            {/* We will add media query in CSS later, for now inline styles for logic */}
            <style>{`
              @media (min-width: 768px) {
                .desktop-nav { display: flex !important; }
                .mobile-toggle { display: none !important; }
              }
              .pulse-text {
                animation: pulse-animation 2s infinite;
              }
              @keyframes pulse-animation {
                0% { opacity: 1; }
                50% { opacity: 0.8; }
                100% { opacity: 1; }
              }
            `}</style>

            <Link to="/" style={{ fontWeight: '500', color: 'var(--text-main)' }}>Home</Link>
            <Link to="/services" style={{ fontWeight: '500', color: 'var(--text-main)' }}>Services</Link>
            <Link to="/gallery" style={{ fontWeight: '500', color: 'var(--text-main)' }}>IQ Gallery</Link>
            <Link to="/about" style={{ fontWeight: '500', color: 'var(--text-main)' }}>About Us</Link>
            <Link to="/blog" style={{ fontWeight: '500', color: 'var(--text-main)' }}>Blogs</Link>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Link to="/contact" className="btn" style={{ background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)' }}>
                Contact Us
              </Link>
              <a href="https://wa.me/918817745099" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#25D366', color: 'white', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>WhatsApp</span>
              </a>
              <Link to="/register-tutor" className="btn btn-primary">
                Become a Tutor
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--primary)' }}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: 'rgba(255, 255, 255, 0.98)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
            <button
              onClick={() => setIsMenuOpen(false)}
              style={{ background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', color: 'var(--primary)' }}
            >
              ✕
            </button>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
            <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)' }}>Home</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)' }}>Services</Link>
            <Link to="/gallery" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)' }}>IQ Gallery</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)' }}>About Us</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)' }}>Blog</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)' }}>Contact Us</Link>
          </nav>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
            <a href="tel:+918817745099" style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <span>📞</span> Call: +91 88177 45099
            </a>
            <a href="https://wa.me/918817745099" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#25D366', color: 'white', border: 'none', width: '100%', fontSize: '1.2rem', padding: '1rem' }}>
              <span>💬</span> WhatsApp Us
            </a>
            <Link to="/register-tutor" onClick={() => setIsMenuOpen(false)} className="btn btn-primary" style={{ width: '100%', fontSize: '1.2rem', padding: '1rem' }}>
              Become a Tutor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
