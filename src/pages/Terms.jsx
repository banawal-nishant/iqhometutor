import React from 'react';

const Terms = () => {
    return (
        <div style={{ paddingTop: '120px', paddingBottom: '5rem', background: '#f8fafc', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '2rem' }}>Terms and Conditions</h1>

                <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Last Updated: {new Date().toLocaleDateString()}</p>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1rem' }}>1. Introduction</h2>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>
                            Welcome to IQ Home Tutors. By accessing our website and using our services, you agree to be bound by these Terms and Conditions. Please read them carefully.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1rem' }}>2. Services</h2>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>
                            IQ Home Tutors facilitates connections between students/parents and tutors. We verify tutors to the best of our ability but do not guarantee specific academic results.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1rem' }}>3. Payments & Fees</h2>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>
                            Registration for students is free. Tuition fees are discussed and agreed upon between the tutor and the parent. IQ Home Tutors may charge a service fee/commission from tutors as per our internal policy.
                        </p>
                    </section>

                    <section style={{ marginBottom: '2rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1rem' }}>4. User Code of Conduct</h2>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>
                            Users must provide accurate information. Any abusive behavior towards tutors or staff will result in immediate termination of services.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--primary)', marginBottom: '1rem' }}>5. Limitation of Liability</h2>
                        <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>
                            IQ Home Tutors is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
