/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// for bundle size analysis
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
// for react three fiber
const withTM = require('next-transpile-modules')(['three']);
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withBundleAnalyzer, withTM], nextConfig);
