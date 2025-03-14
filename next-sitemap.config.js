/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://adexto.com", // Change this to your website URL
    generateRobotsTxt: true, // Automatically generates robots.txt
    sitemapSize: 5000, // Optional: Split sitemap if > 5000 pages
    changefreq: "daily", // How often pages are updated
    priority: 0.7, // Default priority for pages
  };
  