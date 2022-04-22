/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withTM = require('next-transpile-modules')(['three']);
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withBundleAnalyzer, withTM], nextConfig);
