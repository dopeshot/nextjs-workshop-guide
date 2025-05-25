import React from "react";

interface BlogLayoutProps {
  header: React.ReactNode;
  toc: { label: string; href: string }[];
  children: React.ReactNode;
  currentSlug?: string;
}

export default function BlogLayout({ header, toc, children }: BlogLayoutProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <header className="w-full max-w-4xl px-4 pt-10 pb-6">{header}</header>
      <div className="w-full max-w-4xl flex flex-row gap-8 px-4 pb-16">
        <article className="flex-1 prose prose-invert max-w-none mt-10 border-t border-gray-200 pt-4">
          {children}
        </article>
        <aside className="hidden lg:block w-64 flex-shrink-0 mt-10 pt-4">
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
