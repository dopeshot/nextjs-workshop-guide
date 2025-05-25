import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

interface FooterProps {
  currentSlug: string;
}

export default async function Footer({ currentSlug }: FooterProps) {
  const posts = await getAllPosts();
  const idx = posts.findIndex((p) => p.slug === currentSlug);
  const prev = idx > 0 ? posts[idx - 1] : null;
  const next = idx < posts.length - 1 ? posts[idx + 1] : null;

  return (
    <footer className="border-t  mt-8">
      <div className="max-w-5xl mx-auto flex justify-between items-center h-16 px-4">
        <div>
          <Link
            href={`/${prev ? prev.slug : ""}`}
            className="text-yellow font-bold no-underline text-sm transition-colors px-2 py-1"
          >
            &larr; {prev ? prev.title : "Home"}
          </Link>
        </div>
        <div>
          <Link
            href={`/${next ? next.slug : ""}`}
            className="text-yellow font-bold no-underline text-sm transition-colors px-2 py-1"
          >
            {next ? next.title : "Home"} &rarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
