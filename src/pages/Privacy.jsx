import React from 'react';

const Privacy = () => {
    return (
        <div style={{ paddingTop: '120px', paddingBottom: '5rem', background: '#f8fafc', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '2rem' }}>Privacy Policy</h1>

                <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Last Updated: {new Date().toLocaleDateString()}</p>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1rem' }}>1. Information We Collect</h2>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>
                            We collect personal information such as name, email address, phone number, and location when you register or contact us.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>
                            We use your information to:
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                                <li>Connect you with suitable tutors.</li>
                                <li>Communicate with you regarding your enquiries.</li>
                                <li>Improve our services and website.</li>
                            </ul>
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1rem' }}>3. Data Security</h2>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>
                            We implement appropriate security measures to protect your personal information. We do not sell your data to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1rem' }}>4. Contact Us</h2>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>
                            If you have any questions about this Privacy Policy, please contact us at support@iqhometutors.in.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
