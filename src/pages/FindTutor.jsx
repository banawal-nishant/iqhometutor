import React, { useState } from 'react';

const steps = [
    { id: 1, question: "Select your Board", options: ["CBSE", "ICSE", "IGCSE", "State Board", "IB"] },
    { id: 2, question: "Select Grade", options: ["Class 1-5", "Class 6-8", "Class 9-10", "Class 11-12", "Competitive Exams"] },
    { id: 3, question: "Select Subject", options: ["Mathematics", "Physics", "Chemistry", "Biology", "English", "All Subjects"] },
];

const mockTutors = [
    { id: 1, name: "Dr. Anjali Rao", subject: "Mathematics", exp: "8 Years", rating: 4.9, img: "👩‍🏫" },
    { id: 2, name: "Mr. Rajesh Kumar", subject: "Physics", exp: "12 Years", rating: 4.8, img: "👨‍🏫" },
    { id: 3, name: "Ms. Sarah Lee", subject: "English", exp: "5 Years", rating: 5.0, img: "👩‍🎓" },
    { id: 4, name: "Mr. Vikram Singh", subject: "Chemistry", exp: "10 Years", rating: 4.7, img: "👨‍🔬" },
];

const FindTutor = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleOptionClick = (option) => {
        setSelections({ ...selections, [steps[currentStep].id]: option });
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResults(true);
        }
    };

    const reset = () => {
        setCurrentStep(0);
        setSelections({});
        setShowResults(false);
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '80vh' }}>

            {!showResults ? (
                <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>
                        Let's find your perfect tutor
                    </h1>

                    {/* Progress Bar */}
                    <div style={{ display: 'flex', gap: '5px', marginBottom: '3rem', justifyContent: 'center' }}>
                        {steps.map((s, idx) => (
                            <div key={s.id} style={{
                                width: '40px', height: '4px', borderRadius: '2px',
                                background: idx <= currentStep ? 'var(--secondary)' : '#e2e8f0',
                                transition: 'background 0.3s'
                            }}></div>
                        ))}
                    </div>

                    <div className="glass slide-up" style={{ padding: '3rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.5)', boxShadow: 'var(--shadow-lg)' }}>
                        <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>{steps[currentStep].question}</h2>
                        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
                            {steps[currentStep].options.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => handleOptionClick(option)}
                                    className="btn"
                                    style={{
                                        background: 'white',
                                        border: '1px solid #cbd5e1',
                                        color: 'var(--primary)',
                                        padding: '1rem',
                                        fontSize: '1rem'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.background = '#f1f5f9';
                                        e.target.style.borderColor = 'var(--accent)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.background = 'white';
                                        e.target.style.borderColor = '#cbd5e1';
                                    }}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="slide-up">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '2rem', color: 'var(--primary)' }}>Top Tutors for You</h2>
                        <button onClick={reset} style={{ background: 'none', border: 'none', color: 'var(--accent)', textDecoration: 'underline', cursor: 'pointer' }}>Change Preferences</button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                        {mockTutors.map(tutor => (
                            <div key={tutor.id} className="glass" style={{ padding: '2rem', borderRadius: '1rem', transition: 'transform 0.2s', cursor: 'pointer' }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ fontSize: '3rem', background: '#f8fafc', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {tutor.img}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{tutor.name}</h3>
                                        <p style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>★ {tutor.rating}</p>
                                    </div>
                                </div>
                                <div style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                                    <p><strong>Subject:</strong> {tutor.subject}</p>
                                    <p><strong>Experience:</strong> {tutor.exp}</p>
                                </div>
                                <button className="btn btn-primary" style={{ width: '100%' }}>View Profile</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FindTutor;
