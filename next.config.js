/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude specific modules from being bundled on the client side
      config.externals.push(
        /^(canvas|sharp|utf-8-validate|bufferutil)$/i,
        function (context, request, callback) {
          if (/^net$|^tls$/.test(request)) {
            return callback(null, "commonjs " + request);
          }
          callback();
        }
      );
    }
    config.externals.push({
      sharp: "commonjs sharp",
      canvas: "commonjs canvas",
    });
    return config;
  },
};

module.exports = nextConfig;
