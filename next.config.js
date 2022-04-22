/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

const withTM = require('next-transpile-modules')(['three']);
module.exports = withTM(nextConfig);
