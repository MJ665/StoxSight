// next.config.mjs (if type: "module" in package.json)
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Or your other settings
  // ... any other existing configurations ...

  eslint: {
    // !! WARN !!
    // This allows production builds to successfully complete even if
    // your project has ESLint errors. Do this for hackathon speed.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors. Do this for hackathon speed.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;