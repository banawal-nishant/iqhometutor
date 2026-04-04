import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts.jsx';

const Blog = () => {
    const posts = blogPosts;

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '5rem', background: '#f8fafc', minHeight: '100vh' }}>
            <div className="container">

                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.5rem' }}>Our Blog</h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        Educational insights, study tips, and parenting advice from the experts at IQ Home Tutors.
                    </p>
                </div>

                {/* Blog Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                    {posts.map(post => (
                        <article key={post.id} className="glass slide-up" style={{ borderRadius: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: '600', marginBottom: '0.5rem' }}>{post.date}</div>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '1rem', lineHeight: '1.4' }}>{post.title}</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                                    {post.excerpt}
                                </p>
                                <Link to={`/blog/${post.id}`} className="btn-text" style={{ color: 'var(--primary)', fontWeight: '600', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    Read More <span>→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Blog;
