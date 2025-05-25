import { getPostBySlug } from "@/lib/mdx";
import BlogLayout from "@/components/BlogLayout";

export async function generateStaticParams() {
  const posts = (await import("@/lib/mdx")).getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const Content = await import(`@/content/${params.slug}.mdx`);

  return (
    <BlogLayout
      header={<h1 className="text-3xl font-bold">{post.frontMatter.title}</h1>}
      toc={post.toc}
    >
      <Content />
    </BlogLayout>
  );
}
