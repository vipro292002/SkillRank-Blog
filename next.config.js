/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
});

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     providerImportSource: "@mdx-js/react",
//   },
// })
// module.exports = withMDX({
//   // Append the default value with md extensions
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
// })


// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['i.pravatar.cc'],
//   },
//   // i18n: {
//   //   locales: ['en', 'fr'],
//   //   defaultLocale: 'en',
//   //   // localeDetection: false,
//   // },
  
// };



// module.exports = nextConfig;
