/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  ignoreDuringBuilds: true,
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
    silent: true,
  },
};
