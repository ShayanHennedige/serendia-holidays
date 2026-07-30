/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@sparticuz/chromium', 'puppeteer-core'],
  outputFileTracingIncludes: {
    '/api/tour-submissions': ['./node_modules/@sparticuz/chromium/bin/**/*'],
    '/api/tour-submissions/email': ['./node_modules/@sparticuz/chromium/bin/**/*'],
  },
};

export default nextConfig;
