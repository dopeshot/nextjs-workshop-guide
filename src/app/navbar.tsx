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

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="bg-background text-text flex justify-end px-4 py-2 border-b border-gray-200">
      {pages.map((page) => (
        <Link
          key={page.path}
          href={page.path}
          className={`text-white transition-colors px-2 py-1 hover:text-yellow-500 no-underline text-sm font-bold${
            pathname === page.path ? " text-yellow" : ""
          }`}
        >
          {page.name}
        </Link>
      ))}
    </nav>
  );
}
