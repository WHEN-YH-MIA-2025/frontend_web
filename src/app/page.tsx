"use client";

import ThemeToggler from "@/components/layout/ThemeToggler";

export default function Home() {

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <div className="mx-auto max-w-5xl p-8">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-tight dark:text-brand-300">Next.js + Tailwind v4</h1>
          <ThemeToggler />
        </header>

        <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-black/10 p-6 dark:border-white/15">
            <h2 className="mb-3 text-xl font-medium">Brand color usage</h2>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-md bg-brand px-3 py-1 text-white">bg-brand</span>
              <span className="rounded-md bg-brand-500 px-3 py-1 text-white">bg-brand-500</span>
              <span className="rounded-md bg-brand-600 px-3 py-1 text-white">bg-brand-600</span>
              <span className="rounded-md border border-brand-600 px-3 py-1 text-brand-600">text-brand-600</span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              <div className="h-12 rounded bg-brand-50" />
              <div className="h-12 rounded bg-brand-100" />
              <div className="h-12 rounded bg-brand-200" />
              <div className="h-12 rounded bg-brand-300" />
              <div className="h-12 rounded bg-brand-400" />
              <div className="h-12 rounded bg-brand-500" />
              <div className="h-12 rounded bg-brand-600" />
              <div className="h-12 rounded bg-brand-700" />
              <div className="h-12 rounded bg-brand-800" />
              <div className="h-12 rounded bg-brand-900" />
            </div>
          </div>

          <div className="rounded-lg border border-black/10 p-6 dark:border-white/15">
            <h2 className="mb-3 text-xl font-medium">Dark mode preview</h2>
            <p className="mb-4 text-sm text-foreground/70">
              Background and foreground use CSS variables via Tailwind tokens (bg-background, text-foreground).
            </p>
            <div className="rounded-md bg-zinc-100 p-4 dark:bg-zinc-900">
              <p className="mb-3 dark:text-zinc-50">This box flips between light/dark using the <code>dark</code> class.</p>
              <button className="button-brand">Button brand</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
