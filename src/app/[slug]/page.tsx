import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import BlogLayout from "@/components/BlogLayout";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  //! This already also has the content etc. in it so maybe everything below is redundant but w/e
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}
export const dynamicParams = false;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  const { default: Content, meta } = await import(
    `@/content/${resolvedParams.slug}.mdx`
  );

  return (
    <BlogLayout
      header={
        <div>
          <h1 className="text-3xl font-bold">{meta?.title ?? meta.title}</h1>
          <p>{meta?.description ?? meta.description}</p>
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
