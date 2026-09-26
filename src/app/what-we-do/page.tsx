import Link from "next/link";

export default function WhatWeDo() {
  return (
    <>
      <header className="flex items-center justify-between gap-8 px-6 py-6 sm:px-10">
        <Link
          className="shrink-0 text-2xl font-semibold tracking-[0.2em]"
          href="/"
        >
          ATRIDAE
        </Link>
        <nav aria-label="Primary navigation" className="overflow-x-auto">
          <ul className="flex w-max items-center gap-6 whitespace-nowrap text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            <li>
              <a className="hover:text-foreground" href="/how-we-think">
                How we think
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="/what-we-do">
                What we do
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="px-6 py-16 sm:px-10 sm:pt-12 sm:pb-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What we do
          </h1>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Digital products
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              We design and build practical digital products around real user needs —
              from an initial idea through to a working solution.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Software development
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              We develop web, mobile and standalone software, with a focus on
              solutions that are clear, maintainable and appropriate for the problem
              they need to solve.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Software consultancy
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              We help organisations explore software ideas, understand requirements
              and make practical technical decisions before and during development. We
              can also support software quality assurance, testing strategy and
              delivery quality.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}