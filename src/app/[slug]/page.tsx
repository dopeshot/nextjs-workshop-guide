import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import BlogLayout from "@/components/BlogLayout";
import Footer from "../footer";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
export const dynamicParams = false;

export default async function Page({ params }: { params: { slug: string } }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  const { default: Content, meta } = await import(
    `@/content/${resolvedParams.slug}.mdx`
  );

  return (
    <BlogLayout
      header={
        <div>
          <h1 className="text-3xl font-bold">
            {meta?.title ?? post.frontMatter.title}
          </h1>
          <p>{meta?.description ?? post.frontMatter.description}</p>
        </div>
      }
      toc={post.toc}
      currentSlug={resolvedParams.slug}
    >
      <Content />
      <Footer currentSlug={resolvedParams.slug} />
    </BlogLayout>
  );
}
