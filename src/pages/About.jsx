import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div style={{ paddingTop: '120px', paddingBottom: '5rem', background: '#f8fafc', minHeight: '100vh' }}>
            <div className="container">

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem' }}>About IQ Home Tutors</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        Transforming education in Indore through personalized mentorship and verified expert tutors.
                    </p>
                </div>

                {/* Main Content */}
                <div className="glass slide-up" style={{ padding: '3rem', borderRadius: '1.5rem', marginBottom: '4rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '1rem' }}>Who We Are</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                                <strong>IQ Home Tutors</strong> is Indore's premier home tuition network, dedicated to connecting students with the city's most qualified and passionate educators. We believe that every student has "topper potential" waiting to be unlocked with the right guidance.
                            </p>
                        </div>

                        <div style={{ display: 'grid', md: { gridTemplateColumns: '1fr 1fr' }, gap: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--secondary)', marginBottom: '1rem' }}>Our Mission</h3>
                                <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }}>
                                    We believe that the right guidance can transform a student’s academic journey. From school-level subjects to competitive and college exams, our tutors focus on delivering measurable results, boosting confidence, and helping students achieve their full potential.
                                </p>
                                <br />
                                <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }}>
                                    With a strong focus on quality and reliability, we connect students with verified tutors who match their learning style and goals. Our approach ensures a comfortable learning environment where students can grow, ask questions freely, and excel academically.
                                </p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--secondary)', marginBottom: '1rem' }}>Why Indore Chooses Us</h3>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span style={{ color: '#25D366', fontWeight: 'bold' }}>✓</span> 100% Verified Tutors</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span style={{ color: '#25D366', fontWeight: 'bold' }}>✓</span> Personalized Lesson Plans</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span style={{ color: '#25D366', fontWeight: 'bold' }}>✓</span> Affordable & Transparent Pricing</li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><span style={{ color: '#25D366', fontWeight: 'bold' }}>✓</span> Covers All Boards (CBSE/ICSE/IB/MP Board)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1.5rem' }}>Ready to start your journey?</h2>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Contact Us</Link>
                        <a href="https://wa.me/918817745099" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', background: '#25D366', color: 'white', border: 'none' }}>
                            WhatsApp Us
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
