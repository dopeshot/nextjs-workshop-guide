"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./globals.css";

const pages = [
  { name: "Home", path: "/" },
  { name: "Fundamentals", path: "/fundamentals" },
  { name: "RSC", path: "/rsc" },
  { name: "Routing", path: "/routing" },
  { name: "Client Components", path: "/client-components" },
  { name: "Route Handlers", path: "/route-handlers" },
  { name: "Static", path: "/static" },
  { name: "Rendering Methods", path: "/rendering-methods" },
  { name: "Server Data Fetching", path: "/server-data-fetching" },
  { name: "Server Actions", path: "/server-actions" },
  { name: "Dynamic HTML", path: "/dynamic-html" },
  { name: "Error Handling", path: "/error-handling" },
  { name: "Images", path: "/images" },
  { name: "SEO", path: "/seo" },
];

export default function Footer() {
  const pathname = usePathname();
  const idx = pages.findIndex((p) => p.path === pathname);
  const prev = idx > 0 ? pages[idx - 1] : null;
  const next = idx < pages.length - 1 ? pages[idx + 1] : null;

  return (
    <footer className="border-t  mt-8">
      <div className="max-w-5xl mx-auto flex justify-between items-center h-16 px-4">
        <div>
          {prev && (
            <Link
              href={prev.path}
              className="text-yellow font-bold no-underline text-sm transition-colors px-2 py-1"
            >
              &larr; {prev.name}
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link
              href={next.path}
              className="text-yellow font-bold no-underline text-sm transition-colors px-2 py-1"
            >
              {next.name} &rarr;
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
