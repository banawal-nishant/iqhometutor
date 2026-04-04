import React from 'react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/918817745099"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                background: '#25D366',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: 1000,
                transition: 'transform 0.3s ease',
                textDecoration: 'none'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            title="Chat with us on WhatsApp"
        >
            <img
                src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png"
                alt="WhatsApp"
                style={{ width: '35px', height: '35px' }}
            />
        </a>
    );
};

export default WhatsAppButton;
