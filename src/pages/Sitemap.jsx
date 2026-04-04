import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
    const links = [
        { title: 'Home', path: '/' },
        { title: 'About Us', path: '/about' },
        { title: 'Find a Tutor', path: '/tutors' },
        { title: 'Become a Tutor', path: '/register-tutor' },
        { title: 'Contact Us', path: '/contact' },
        { title: 'Terms of Service', path: '/terms' },
        { title: 'Privacy Policy', path: '/privacy' },
    ];

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '5rem', background: '#f8fafc', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '2rem' }}>Sitemap</h1>

                <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li>
                            <Link to="/" style={{ fontSize: '1.2rem', color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--secondary)' }}>•</span> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" style={{ fontSize: '1.2rem', color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--secondary)' }}>•</span> About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" style={{ fontSize: '1.2rem', color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--secondary)' }}>•</span> Blog
                            </Link>
                        </li>
                        <li>
                            {/* Replaced 'Find a Tutor' link with WhatsApp Button as requested */}
                            <a href="https://wa.me/918817745099?text=I%20am%20looking%20for%20a%20home%20tutor" target="_blank" rel="noopener noreferrer" className="btn" style={{ fontSize: '1.1rem', background: '#25D366', color: 'white', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: 'none' }}>
                                <span>Find a Tutor (WhatsApp)</span>
                            </a>
                        </li>
                        <li>
                            <Link to="/register-tutor" style={{ fontSize: '1.2rem', color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--secondary)' }}>•</span> Become a Tutor
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" style={{ fontSize: '1.2rem', color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--secondary)' }}>•</span> Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" style={{ fontSize: '1.2rem', color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--secondary)' }}>•</span> Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy" style={{ fontSize: '1.2rem', color: 'var(--primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--secondary)' }}>•</span> Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sitemap;
