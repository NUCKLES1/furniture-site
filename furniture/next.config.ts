/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { protocol: "https", hostname: "cdn.sanity.io" },
        { protocol: "https", hostname: "lh3.googleusercontent.com" },
      ],
    },
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
  };
  module.exports = {
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
  }
  
  export default nextConfig;