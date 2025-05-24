import BlogLayout from "@/components/BlogLayout";

const intro = `Welcome to the Next.js Workshop Guide! Here you'll find in-depth articles and hands-on examples to master modern web development with Next.js.`;

const toc = [
  { label: "Introduction", href: "#introduction" },
  { label: "Getting Started", href: "#getting-started" },
  { label: "Key Concepts", href: "#key-concepts" },
  { label: "Conclusion", href: "#conclusion" },
];

export default function Home() {
  return (
    <BlogLayout
      header={
        <>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-primary">
            Next.js Workshop Guide
          </h1>
          <p className="text-lg text-secondary max-w-2xl">{intro}</p>
        </>
      }
      toc={toc}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          This guide will help you get started with Next.js and understand its
          core features.
        </p>
      </section>
      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>
          Learn how to set up your first Next.js project and explore the file
          structure.
        </p>
      </section>
      <section id="key-concepts">
        <h2>Key Concepts</h2>
        <p>Understand routing, data fetching, rendering methods, and more.</p>
      </section>
      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>You're now ready to build amazing apps with Next.js!</p>
      </section>
    </BlogLayout>
  );
}
