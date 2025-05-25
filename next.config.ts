import type { NextConfig } from 'next';
import createMDX from '@next/mdx'

const withMDX = createMDX({
   extension: /\.(md|mdx)$/,
})

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

export default withMDX(nextConfig)