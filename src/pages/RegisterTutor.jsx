import React, { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY } from '../constants';

const RegisterTutor = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // TODO: Replace with your actual Web3Forms Access Key
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Application Submitted Successfully! We will contact you shortly.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '5rem', background: '#f8fafc', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem', textAlign: 'center' }}>Become a Tutor</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                    Join IQ Home Tutors and help shape the future of students in Indore.
                </p>

                <div className="glass slide-up" style={{ padding: '3rem', borderRadius: '1.5rem' }}>
                    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="name" style={{ fontWeight: '600', color: 'var(--primary)' }}>Full Name</label>
                                <input type="text" name="name" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '1rem' }} placeholder="Dr. Sarah Jones" />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="email" style={{ fontWeight: '600', color: 'var(--primary)' }}>Email Address</label>
                                <input type="email" name="email" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '1rem' }} placeholder="sarah@example.com" />
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="phone" style={{ fontWeight: '600', color: 'var(--primary)' }}>Phone Number</label>
                                <input type="tel" name="phone" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '1rem' }} placeholder="+91 98765 43210" />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="subject" style={{ fontWeight: '600', color: 'var(--primary)' }}>Subject Expertise</label>
                                <input type="text" name="subject" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '1rem' }} placeholder="Mathematics, Physics (Class 11-12)" />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="experience" style={{ fontWeight: '600', color: 'var(--primary)' }}>Teaching Experience</label>
                            <textarea name="experience" rows="3" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '1rem', fontFamily: 'inherit' }} placeholder="Briefly describe your teaching experience and qualifications..."></textarea>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="resume" style={{ fontWeight: '600', color: 'var(--primary)' }}>Resume / Portfolio Link</label>
                            <input type="url" name="resume_link" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '1rem' }} placeholder="https://linkedin.com/in/yourprofile or Google Drive Link" />
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Paste a link to your LinkedIn profile or Google Drive resume (File uploads require a Pro account).</span>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
                            Submit Application
                        </button>

                        <span style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-muted)' }}>{result}</span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterTutor;
