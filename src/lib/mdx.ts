import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';

const contentDir = path.join(process.cwd(), 'content');

type TOCEntry = {
  value: string;
  id: string;
  depth: number;
};

async function extractTOC(markdown: string): Promise<{ label: string; href: string }[]> {
  const toc: { label: string; href: string }[] = [];

  const unified = (await import('unified')).unified;
  const remarkParse = (await import('remark-parse')).default;
  const { visit } = await import('unist-util-visit');

  const tree = unified().use(remarkParse).parse(markdown);

  visit(tree, 'heading', (node: any) => {
    const textNode = node.children.find((child: any) => child.type === 'text');
    if (textNode) {
      const id = textNode.value.toLowerCase().replace(/\s+/g, '-');
      toc.push({
        label: textNode.value,
        href: `#${id}`,
      });
    }
  });

  return toc;
}


export async function getPostBySlug(slug: string) {
  const fullPath = path.join(contentDir, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(source);

  const toc = await extractTOC(content); // ✅ Await the async TOC

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    slug,
    frontMatter: data,
    mdxSource,
    toc,
  };
}


export function getAllPosts() {
  const filenames = fs.readdirSync(contentDir);

  return filenames.map((filename) => {
    const filePath = path.join(contentDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx$/, ''),
      ...data,
    };
  }).sort((a, b) => a.index - b.index);
}
