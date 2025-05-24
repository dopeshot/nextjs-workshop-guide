"use client";
import React from "react";

interface BlogLayoutProps {
  header: React.ReactNode;
  toc: { label: string; href: string }[];
  children: React.ReactNode;
}

export default function BlogLayout({ header, toc, children }: BlogLayoutProps) {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-4xl px-4 pt-10 pb-6">{header}</header>
      {/* Main Blog Layout */}
      <div className="w-full max-w-4xl flex flex-row gap-8 px-4 pb-16">
        {/* Blog Content */}
        <article className="flex-1 prose prose-invert max-w-none">
          {children}
        </article>
        {/* Table of Contents */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <nav className="sticky top-20 bg-[#18181b] rounded-xl border border-zinc-800 p-4 shadow-lg">
            <h3 className="text-yellow text-lg font-bold mb-4">On this page</h3>
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-secondary hover:text-yellow transition-colors font-medium"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  );
}
