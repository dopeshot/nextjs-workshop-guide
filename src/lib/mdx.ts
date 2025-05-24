import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const BLOG_PATH = path.join(process.cwd(), "content/blog");

export function getAllPostSlugs() {
  return fs.readdirSync(BLOG_PATH).filter((f) => f.endsWith(".mdx"));
}

export function getAllPostsMeta() {
  return getAllPostSlugs().map((slug) => {
    const fullPath = path.join(BLOG_PATH, slug);
    const file = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(file);
    return {
      slug: slug.replace(/\.mdx$/, ""),
      title: data.title,
    };
  });
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(BLOG_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
  });

  // TOC Extraction from headings (h2/h3)
  const toc = [...content.matchAll(/^(##+)\s+(.*)$/gm)].map(([, hashes, title]) => ({
    label: title.trim(),
    href: `#${title.toLowerCase().replace(/\s+/g, "-")}`,
  }));

  return {
    frontMatter: data,
    slug,
    mdxSource,
    toc,
  };
}
