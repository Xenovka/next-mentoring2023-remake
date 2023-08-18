/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"]
  },
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.externals.push({
  //       canvas: 'commonjs canvas',
  //       sharp: 'commonjs sharp',
  //       'utf-8-validate': 'commonjs utf-8-validate',
  //       'bufferutil': 'commonjs bufferutil',
  //     })
  //   }

  //   return config;
  // },
  webpack: (config) => { config.externals.push({ sharp: 'commonjs sharp', canvas: 'commonjs canvas', }); return config; },
};

module.exports = nextConfig;
