import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
// import { MDXRemote } from "next-mdx-remote";
import BlogLayout from "@/components/BlogLayout";

export async function generateStaticParams() {
  const posts = (await import("@/lib/mdx")).getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  return (
    <BlogLayout
      header={<h1 className="text-3xl font-bold">{post.frontMatter.title}</h1>}
      toc={post.toc}
    >
      <MDXRemote {...post.mdxSource} />
    </BlogLayout>
  );
}
