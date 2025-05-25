import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default async function Navbar() {
  const posts = await getAllPosts();

  const pages = [
    { name: "Home", path: "/" },
    ...posts.map((post) => ({
      name: post.title,
      path: `/${post.slug}`,
    })),
  ];

  return (
    <nav className="bg-background text-text flex flex-wrap gap-4 justify-end px-4 py-2 border-b border-gray-200">
      {pages.map((page) => (
        <Link
          key={page.path}
          href={page.path}
          className="text-white transition-colors px-2 py-1 hover:text-yellow-500 no-underline text-sm font-bold"
        >
          {page.name}
        </Link>
      ))}
    </nav>
  );
}
