import type { NextConfig } from 'next';
import createMDX from '@next/mdx'
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const withMDX = createMDX({
   extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
};

export default withMDX(nextConfig)