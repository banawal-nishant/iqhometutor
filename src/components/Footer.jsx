import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--primary)', color: 'white', paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <div style={{ width: '32px', height: '32px', background: 'white', borderRadius: '6px', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>IQ</div>
                            <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Home <span style={{ color: 'var(--secondary)' }}>Tutors</span></span>
                        </div>
                        <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
                            Connecting students with the best home tutors in Indore. Personalized learning for guaranteed success.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--secondary)' }}>Company</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/about" style={{ color: '#cbd5e1' }}>About Us</Link></li>
                            <li><Link to="/blog" style={{ color: '#cbd5e1' }}>Blog</Link></li>
                            <li><Link to="/contact" style={{ color: '#cbd5e1' }}>Contact Us</Link></li>
                            <li><Link to="/terms" style={{ color: '#cbd5e1' }}>Terms & Conditions</Link></li>
                            <li><Link to="/privacy" style={{ color: '#cbd5e1' }}>Privacy Policy</Link></li>
                            <li><Link to="/sitemap" style={{ color: '#cbd5e1' }}>Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--secondary)' }}>Services</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><Link to="/register-tutor" style={{ color: '#cbd5e1' }}>Become a Tutor</Link></li>
                            <li><Link to="/home-tuition" style={{ color: '#cbd5e1' }}>Home Tuition</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--secondary)' }}>Contact</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#cbd5e1' }}>
                            <li>📞 +91 8817745099</li>
                            <li>✉️ iqhometutors@gmail.com</li>
                            <li>📍 1494/11,1st Floor, Sarthak Bhawan, ITI Main Road, Nanda Nagar, Indore, Madhya Pradesh 452011</li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #334155', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
                    <p>© 2026 IQ Home Tutors. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
