import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why React Still Dominates in 2025: A Developer's Perspective",
      date: 'April 14, 2024',
      excerpt: 'Discover why React remains the top JavaScript library for frontend development in 2025, with insights on performance, ecosystem, and future trends.',
      category: 'React Development',
      image: '/images/reactlogowhite.png',
      readTime: '5 min read',
      slug: 'developers-perspective-on-react'
    },
    {
      id: 2,
      title: 'Unlocking the Stock Market: The Power of Fundamental Analysis',
      date: 'April 12, 2024',
      excerpt: 'Learn how fundamental analysis serves as a reliable compass in stock market investing, helping you separate emotion from logic and make informed investment decisions.',
      category: 'Stock Market',
      image: '/images/stockblog.jpeg',
      readTime: '10 min read',
      slug: 'stock-market-analysis-comparison'
    },
    {
      id: 3,
      title: 'Why SEO is the Backbone of Digital Marketing',
      excerpt: 'Discover why SEO is crucial for digital marketing success and how it drives sustainable business growth through organic visibility and trust.',
      date: 'April 10, 2024',
      category: 'Digital Marketing',
      readTime: '8 min read',
      slug: 'digital-marketing-strategies-2024',
      image: '/images/seoblog.jpg'
    }
  ];

  return (
    <div className="blog-container">
      <h1>Blog</h1>
      <p className="blog-intro">
        Insights and articles about React Development, Stock Market Analysis, and Digital Marketing
      </p>
      <div className="blog-grid">
        {blogPosts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-image">
              <Link to={`/blog/${post.slug}`}>
                <img src={post.image} alt={post.title} />
              </Link>
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <span className="date">{post.date}</span>
                <span className="read-time">{post.readTime}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="read-more">
                Read More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog; 