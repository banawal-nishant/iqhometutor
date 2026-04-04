import React from 'react';
import galleryImg1 from '../assets/gallery-1.png';
import galleryImg2 from '../assets/gallery-2.png';

const Gallery = () => {
    const images = [
        {
            src: galleryImg1,
            title: "Expert Interaction",
            category: "Classroom"
        },
        {
            src: galleryImg2,
            title: "Personalized Coaching",
            category: "1-on-1"
        },
        {
            src: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=600",
            title: "Student Success",
            category: "Portrait"
        },
        {
            src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
            title: "Modern Study Tools",
            category: "Environment"
        },
        {
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
            title: "Team Collaboration",
            category: "Meeting"
        },
        {
            src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600",
            title: "Resourceful Library",
            category: "Study"
        }
    ];

    return (
        <div style={{ paddingTop: '0px', minHeight: '100vh', background: '#f8fafc' }}>
            {/* Header */}
            <section style={{ paddingTop: '4rem', paddingBottom: '4rem', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                        IQ <span style={{ color: 'var(--secondary)' }}>Gallery</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                        Witness the journey of learning and excellence at IQ Home Tutors. Real moments, real results.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
                        gap: '2rem' 
                    }}>
                        {images.map((img, index) => (
                            <div key={index} className="gallery-item-container" style={{ position: 'relative', overflow: 'hidden', borderRadius: '1.5rem', height: '400px', boxShadow: 'var(--shadow-lg)' }}>
                                <img 
                                    src={img.src} 
                                    alt={img.title} 
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'cover', 
                                        transition: 'transform 0.5s ease' 
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div style={{ 
                                    position: 'absolute', 
                                    bottom: 0, 
                                    left: 0, 
                                    width: '100%', 
                                    padding: '2rem', 
                                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)', 
                                    color: 'white' 
                                }}>
                                    <span style={{ 
                                        fontSize: '0.85rem', 
                                        fontWeight: '600', 
                                        textTransform: 'uppercase', 
                                        letterSpacing: '0.05em', 
                                        color: 'var(--secondary)',
                                        display: 'block',
                                        marginBottom: '0.5rem'
                                    }}>
                                        {img.category}
                                    </span>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>{img.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section style={{ padding: '6rem 0', textAlign: 'center', background: 'white' }}>
                <div className="container">
                    <div style={{ fontSize: '3rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>"</div>
                    <blockquote style={{ 
                        fontSize: '2rem', 
                        fontWeight: '700', 
                        color: 'var(--primary)', 
                        maxWidth: '800px', 
                        margin: '0 auto', 
                        lineHeight: '1.3',
                        letterSpacing: '-0.01em'
                    }}>
                        Every student has a different learning pathway. Our goal is to illuminate it.
                    </blockquote>
                    <p style={{ marginTop: '2rem', fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: '600' }}>— IQ Mentorship Team</p>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
