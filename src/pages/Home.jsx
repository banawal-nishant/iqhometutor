import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-tutor.png';
import teacherImage from '../assets/teacher-iq-tutor.jpg';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section style={{ paddingTop: '100px', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
                {/* Decorative Background Blob */}
                <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(234,179,8,0.2) 0%, rgba(248,250,252,0) 70%)', zIndex: -1 }}></div>

                <div className="container hero-grid">
                    <div className="slide-up">
                        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: '#dbeafe', color: '#1e40af', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                            ✨ #1 Rated Home Tuition in Indore
                        </div>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.02em', color: 'var(--primary)' }}>
                            Find The Best <br />
                            <span style={{ color: 'var(--secondary)' }}>Home Tutors</span>
                            <br />
                            <span style={{ color: 'var(--primary)' }}>Near You</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: '#2b2f33ff', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: '1.6' }}>
                            Crack School &amp; Competitive Exams with Expert 1-on-1 Tuition (Class 1–12, NEET, JEE, B.A., B.Com, B.Sc.).
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/tutors" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                                Find a Tutor Now
                            </Link>
                            <Link to="/contact" className="btn" style={{ padding: '1rem 2rem', fontSize: '1.1rem', background: 'white', border: '1px solid #e2e8f0' }}>
                                Book Free Demo
                            </Link>
                        </div>

                        <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ display: 'flex' }}>
                                {[1, 2, 3, 4].map(i => (
                                    <img
                                        key={i}
                                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                        alt={`User ${i}`}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            border: '2px solid white',
                                            marginLeft: i > 1 ? '-10px' : 0,
                                            objectFit: 'cover',
                                            background: '#cbd5e1'
                                        }}
                                    />
                                ))}
                            </div>
                            <div>
                                <p style={{ fontWeight: '700', color: 'var(--primary)' }}>500+ Parents</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Trust us with their future</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-image-container slide-up" style={{ animationDelay: '0.2s' }}>
                        <img src={heroImage} alt="Home Tutoring" className="hero-image" />
                    </div>
                </div>
            </section>

            {/* Features Section - Bento Grid */}
            <section style={{ padding: '5rem 0', background: '#f1f5f9' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem' }}>Why IQ Home Tutors?</h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>We provide more than just teaching; we provide a bridge to academic excellence.</p>
                    </div>

                    {/* Row 1 */}
                    <div className="bento-row-1">
                        {/* Card 1: 1-on-1 Personalized Learning */}
                        <div style={{ background: 'white', borderRadius: '1.5rem', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                            <span style={{ fontSize: '2.5rem', marginBottom: '1.25rem', display: 'block' }}>🔍</span>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.75rem' }}>1-on-1 Personalized Learning</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>Customized attention tailored to each student's unique learning pace and style, ensuring no concept is left misunderstood.</p>
                        </div>

                        {/* Card 2: Hero Image */}
                        <div className="bento-image-card" style={{ borderRadius: '1.5rem', overflow: 'hidden', background: '#1e293b' }}>
                            <img
                                src={teacherImage}
                                alt="IQ Home Tutors - Teacher"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                            />
                        </div>

                        {/* Card 3: Verified Tutors - green */}
                        <div style={{ background: '#4ade80', borderRadius: '1.5rem', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                            <span style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}>🛡️</span>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#14532d', marginBottom: '0.75rem' }}>Verified Tutors</h3>
                            <p style={{ color: '#166534', lineHeight: '1.6', fontSize: '0.95rem' }}>Rigorous background checks and qualification audits for your peace of mind.</p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="bento-row-2">
                        {/* Card 4: Flexible Timings */}
                        <div style={{ background: '#f3f71cff', borderRadius: '1.5rem', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                            <span style={{ fontSize: '2.5rem', marginBottom: '1.25rem', display: 'block' }}>🕐</span>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.75rem' }}>Flexible Timings</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>Learn at hours that suit your family's busy schedule. Weekends or evenings.</p>
                        </div>

                        {/* Card 5: All Subjects */}
                        <div style={{ background: 'white', borderRadius: '1.5rem', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                            <span style={{ fontSize: '2.5rem', marginBottom: '1.25rem', display: 'block' }}>📖</span>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.75rem' }}>All Subjects</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>From Maths to Physics and Accountancy, we cover the entire K-12 spectrum.</p>
                        </div>

                        {/* Card 6: Free Demo - dark navy */}
                        <div style={{ background: 'var(--primary)', borderRadius: '1.5rem', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: 'white', marginBottom: '0.75rem' }}>Free Demo Class</h3>
                            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.6', fontSize: '0.95rem' }}>Book a trial session and see the difference a great mentor makes first-hand.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section style={{ padding: '5rem 0', background: '#f8fafc' }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexDirection: 'column', md: { flexDirection: 'row' } }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '1.5rem', textAlign: 'center' }}>About IQ Home Tutors</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            At <strong>IQ Home Tutors</strong>, we are dedicated to providing the best experienced teachers all across <strong>Indore city</strong>. We understand that every student has unique learning needs, which is why we meticulously select our tutors to ensure they offer not just academic knowledge, but also mentorship and guidance.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            We believe that the right guidance can transform a student’s academic journey. From school-level subjects to competitive and college exams, our tutors focus on delivering measurable results, boosting confidence, and helping students achieve their full potential.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            With a strong focus on quality and reliability, we connect students with verified tutors who match their learning style and goals. Our approach ensures a comfortable learning environment where students can grow, ask questions freely, and excel academically.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: '#25D366', fontSize: '1.5rem' }}>✔</span>
                                <span style={{ fontWeight: '600' }}>Verified Tutors</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ color: '#25D366', fontSize: '1.5rem' }}>✔</span>
                                <span style={{ fontWeight: '600' }}>Indore Wide Coverage</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Carousel */}
            <section style={{ padding: '5rem 0', background: 'white', overflow: 'hidden' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem' }}>
                            What <span style={{ color: 'var(--secondary)' }}>Parents</span> Say
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Real stories from families who trust IQ Home Tutors.</p>
                    </div>

                    {(() => {
                        const testimonials = [
                            {
                                quote: "I had wonderful experience with iq home tutor the process of finding the excellent home teacher was awesome and quality of teaching that tutor possess are good to the point.",
                                name: "Saksham Dubey",
                            },
                            {
                                quote: "For better result you can hire tutors from this institute 😊😊",
                                name: "Neetu Yadav",
                            },
                            {
                                quote: "Good way to learn something at home by iq tutors.",
                                name: "Poonam Rathore",
                            }
                        ];

                        const [current, setCurrent] = useState(0);

                        useEffect(() => {
                            const timer = setInterval(() => {
                                setCurrent(prev => (prev + 1) % testimonials.length);
                            }, 4000);
                            return () => clearInterval(timer);
                        }, []);

                        const prev = () => setCurrent(p => (p - 1 + testimonials.length) % testimonials.length);
                        const next = () => setCurrent(p => (p + 1) % testimonials.length);
                        const t = testimonials[current];

                        return (
                            <div style={{ position: 'relative', maxWidth: '780px', margin: '0 auto' }}>
                                {/* Card */}
                                <div key={current} style={{
                                    background: '#f8fafc',
                                    borderRadius: '1.5rem',
                                    padding: '3rem',
                                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                                    borderLeft: '5px solid var(--secondary)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1.25rem',
                                    animation: 'fadeInSlide 0.4s ease',
                                }}>
                                    <style>{`
                                        @keyframes fadeInSlide {
                                            from { opacity: 0; transform: translateX(30px); }
                                            to   { opacity: 1; transform: translateX(0); }
                                        }
                                    `}</style>

                                    {/* Stars */}
                                    <div style={{ color: '#eab308', fontSize: '1.3rem', letterSpacing: '3px' }}>★★★★★</div>

                                    {/* Big quote mark */}
                                    <div style={{ fontSize: '4.5rem', lineHeight: 1, color: 'var(--secondary)', fontFamily: 'Georgia, serif', marginBottom: '-1.5rem' }}>&#8220;</div>

                                    {/* Quote */}
                                    <p style={{ color: '#374151', lineHeight: '1.9', fontSize: '1.1rem', fontStyle: 'italic', marginTop: 0 }}>
                                        {t.quote}
                                    </p>

                                    {/* Author */}
                                    <div style={{ paddingTop: '1.25rem', borderTop: '1px solid #e2e8f0' }}>
                                        <p style={{ fontWeight: '700', color: 'var(--primary)', fontSize: '1rem' }}>{t.name}</p>
                                    </div>
                                </div>

                                {/* Prev / Next Buttons */}
                                <button onClick={prev} style={{ position: 'absolute', top: '50%', left: '-1.5rem', transform: 'translateY(-50%)', width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary)', color: 'white', border: 'none', cursor: 'pointer', fontSize: '1.2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', zIndex: 2 }}>‹</button>
                                <button onClick={next} style={{ position: 'absolute', top: '50%', right: '-1.5rem', transform: 'translateY(-50%)', width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary)', color: 'white', border: 'none', cursor: 'pointer', fontSize: '1.2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', zIndex: 2 }}>›</button>

                                {/* Dot Indicators */}
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '2rem' }}>
                                    {testimonials.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrent(i)}
                                            style={{
                                                width: i === current ? '28px' : '10px',
                                                height: '10px',
                                                borderRadius: '999px',
                                                background: i === current ? 'var(--primary)' : '#cbd5e1',
                                                border: 'none',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                padding: 0
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>

            {/* How It Works */}
            <section style={{ padding: '5rem 0', background: 'var(--background)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '1rem' }}>How It Works</h2>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>

                        <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>1</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Share Requirements</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Tell us about the subject, grade, and your preferred schedule.</p>
                        </div>

                        <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', background: 'var(--secondary)', color: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>2</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Get Matched</h3>
                            <p style={{ color: 'var(--text-muted)' }}>We analyze our database and connect you with the best-fit tutor.</p>
                        </div>

                        <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
                            <div style={{ width: '80px', height: '80px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>3</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>Start Learning</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Take a free demo class and start your journey to success.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '4rem 0', background: 'var(--primary)', textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Ready to boost your grades?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>Join thousands of happy students who achieved their goals with IQ Home Tutors.</p>
                    <Link to="/tutors" className="btn btn-secondary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>Get Started Today</Link>
                </div>
            </section>
        </>
    );
};

export default Home;
