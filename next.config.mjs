/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['../../src/ui-components'],
  compiler: {
    swcMinify: true,
  },
  experimental: {
    appDir: true,
    nextScriptWorkers: false,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ui-components': '../../src/ui-components',
    };
    return config;
  },
};

export default nextConfig;
