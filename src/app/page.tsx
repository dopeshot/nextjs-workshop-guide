import BlogLayout from "@/components/BlogLayout";
import Footer from "./footer";
import { getPostBySlug } from "@/lib/mdx";

export default async function Home() {
  const post = await getPostBySlug("home");
  const { default: Content, meta } = await import("@/app/home.mdx");
  return (
    <BlogLayout
      header={
        <>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-primary">
            {meta?.title ?? meta.title}
          </h1>
          <p className="text-lg text-secondary max-w-2xl">
            {meta?.description ?? meta.description}
          </p>
        </>
      }
      toc={post.toc}
    >
      <Content />
      <Footer currentSlug={""} />
    </BlogLayout>
  );
}
