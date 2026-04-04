import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts.jsx';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === parseInt(id));

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div style={{ paddingTop: '120px', paddingBottom: '5rem', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2rem', color: 'var(--primary)' }}>Post Not Found</h1>
                    <Link to="/blog" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '5rem', background: '#f8fafc', minHeight: '100vh' }}>
            <div className="container" style={{ maxWidth: '800px' }}>

                <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>
                    ← Back to Blog
                </Link>

                <div className="glass slide-up" style={{ padding: '0', borderRadius: '1.5rem', overflow: 'hidden' }}>
                    <div style={{ height: '400px', width: '100%' }}>
                        <img
                            src={post.image}
                            alt={post.title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>

                    <div style={{ padding: '3rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--secondary)', fontWeight: '600' }}>{post.date}</span>
                            <span>•</span>
                            <span>By Expert Team</span>
                        </div>

                        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '2rem', lineHeight: '1.3' }}>
                            {post.title}
                        </h1>

                        <div className="blog-content" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                            {post.content}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem', background: 'var(--primary)', borderRadius: '1.5rem', color: 'white' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Need personalized guidance?</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9' }}>Our expert tutors in Indore are ready to help your child achieve their academic goals.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <a href="https://wa.me/918817745099?text=I%20am%20interested%20in%20home%20tuition" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'white', color: 'var(--primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                            <span>Find a Tutor</span>
                        </a>
                        <a href="https://wa.me/918817745099" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#25D366', color: 'white', border: 'none' }}>WhatsApp Us</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogPost;
