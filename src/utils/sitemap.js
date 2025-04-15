import React from 'react';

// Define your routes
const routes = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/about', priority: 0.8, changefreq: 'weekly' },
  { path: '/projects', priority: 0.8, changefreq: 'weekly' },
  { path: '/contact', priority: 0.7, changefreq: 'monthly' }
];

// Function to generate sitemap XML
export const generateSitemap = () => {
  const baseUrl = 'https://bhagirathdevani.com'; // Replace with your actual domain
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${baseUrl}${route.path}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>
  `).join('')}
</urlset>`;

  return sitemap;
};

// Function to generate robots.txt
export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /
Sitemap: https://bhagirathdevani.com/sitemap.xml`;
}; 