/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://devtools-hub.pages.dev',
  generateRobotsTxt: false,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*'],
  additionalPaths: async (config) => {
    // This generates additional sitemap entries from the database
    // Run via: npx next-sitemap
    return [];
  },
};
