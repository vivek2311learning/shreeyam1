/** @type {import('next').NextConfig} */
// const nextConfig = {};


// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
