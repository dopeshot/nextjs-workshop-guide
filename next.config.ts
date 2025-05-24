import type { NextConfig } from 'next';


/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

export default nextConfig;