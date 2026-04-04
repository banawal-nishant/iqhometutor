import React, { useState } from 'react';
import { WEB3FORMS_ACCESS_KEY } from '../constants';

const Contact = () => {
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
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="container" style={{ paddingTop: '120px', paddingBottom: '4rem', maxWidth: '800px' }}>
            <div className="glass slide-up" style={{ padding: '3rem', borderRadius: '1.5rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem', textAlign: 'center' }}>Contact Us</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>

                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="name" style={{ fontWeight: '600', color: 'var(--primary)' }}>Name</label>
                            <input type="text" name="name" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '1rem' }} placeholder="John Doe" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="email" style={{ fontWeight: '600', color: 'var(--primary)' }}>Email</label>
                            <input type="email" name="email" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '1rem' }} placeholder="john@example.com" />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="subject" style={{ fontWeight: '600', color: 'var(--primary)' }}>Subject</label>
                        <input type="text" name="subject" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '1rem' }} placeholder="How can we help?" />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="message" style={{ fontWeight: '600', color: 'var(--primary)' }}>Message</label>
                        <textarea name="message" required rows="5" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid #cbd5e1', fontSize: '1rem', fontFamily: 'inherit' }} placeholder="Write your message here..."></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
                        Send Message
                    </button>

                    <span style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-muted)' }}>{result}</span>
                </form>
            </div>
        </div>
    );
};

export default Contact;
