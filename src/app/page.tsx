import BlogLayout from "@/components/BlogLayout";
import Footer from "./footer";

const intro = `Welcome to the Next.js Workshop Guide! Here you'll find in-depth articles and hands-on examples to master modern web development with Next.js.`;

const toc = [
  { label: "Introduction", href: "#introduction" },
  { label: "Getting Started", href: "#getting-started" },
  { label: "Key Concepts", href: "#key-concepts" },
  { label: "Conclusion", href: "#conclusion" },
];

export default async function Home() {
  const { default: Content, meta } = await import(`@/app/home.mdx`);
  return (
    <BlogLayout
      header={
        <>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-primary">
            {meta?.title ?? meta.title}
          </h1>
          <p className="text-lg text-secondary max-w-2xl">{intro}</p>
        </>
      }
      toc={toc}
    >
      <Content />
      <Footer currentSlug={""} />
    </BlogLayout>
  );
}
