/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export
  // basePath: "/your-repo-name", // Uncomment and set if this is a project page
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;