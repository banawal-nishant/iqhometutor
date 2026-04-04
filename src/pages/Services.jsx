import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            title: "School Tuition",
            description: "Expert guidance for students from Class 1 to 12 across all major boards (CBSE, ICSE, State Boards).",
            subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "Accounts", "Economics"],
            icon: "📚",
            color: "#dbeafe"
        },
        {
            title: "College Tuition",
            description: "Comprehensive support for undergraduate and postgraduate students across diverse disciplines.",
            subjects: ["B.Com", "BBA/MBA", "B.Sc", "B.A", "B Pharma", "MBBS"],
            icon: "🎓",
            color: "#dcfce7"
        },
        {
            title: "Entrance Exam Coaching",
            description: "Dedicated preparation programs for competitive national and state-level entrance examinations.",
            subjects: ["JEE Mains", "JEE Advance", "NEET UG", "BITSAT", "VITEEE", "SRMJEEE", "CA Foundation", "TALLY", "CAT", "GMAT", "IPM", "CLAT"],
            icon: "📕",
            color: "#fef9c3"
        },
        {
            title: "Language Training",
            description: "Master new languages and improve communication skills with our expert linguists.",
            subjects: ["Spoken English", "French Language"],
            icon: "🌐",
            color: "#ffedd5"
        },
        {
            title: "Arts & Music",
            description: "Nurture your creativity and talents with our specialized arts and music programs.",
            subjects: ["Dance Classes", "Instrumental Music", "Vocal Music", "Art & Craft", "Chess"],
            icon: "🎨",
            color: "#f3e8ff"
        },
        {
            title: "Online Classes",
            description: "Flexible and interactive online tutoring sessions from the comfort of your home.",
            subjects: ["Interactive Live Sessions", "Recorded Lectures", "Digital Notes", "All Subjects"],
            icon: "💻",
            color: "#e0f2fe"
        }
    ];

    return (
        <div style={{ paddingTop: '0px', minHeight: '100vh' }}>
            {/* Header Section */}
            <section style={{ paddingTop: '4rem', paddingBottom: '4rem', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}>Our <span style={{ color: 'var(--secondary)' }}>Services</span></h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
                        Empowering students with premium home tutoring across Indore. We provide expert mentors for every learning need.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                        {services.map((service, index) => (
                            <div key={index} className="glass" style={{ padding: '2.5rem', borderRadius: '1.5rem', transition: 'transform 0.3s ease', cursor: 'default' }}>
                                <div style={{ 
                                    width: '70px', 
                                    height: '70px', 
                                    background: service.color, 
                                    borderRadius: '16px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    fontSize: '2.5rem', 
                                    marginBottom: '1.5rem',
                                    color: 'var(--primary)'
                                }}>
                                    {service.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--primary)' }}>{service.title}</h3>
                                <p style={{ color: '#2b2f33ff', lineHeight: '1.7', marginBottom: '1.5rem' }}>{service.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                    {service.subjects.map((subject, sIndex) => (
                                        <span key={sIndex} style={{ 
                                            padding: '0.4rem 0.8rem', 
                                            background: '#f1f5f9', 
                                            borderRadius: '50px', 
                                            fontSize: '0.85rem', 
                                            fontWeight: '500', 
                                            color: 'var(--primary)' 
                                        }}>
                                            {subject}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--primary)' }}>Not sure which service you need?</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>Book a free counseling session and we'll help you find the perfect tutor.</p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>Contact Us Now</Link>
                </div>
            </section>
        </div>
    );
};

export default Services;
