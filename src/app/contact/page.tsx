import Link from "next/link";

export default function Contact() {
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
            Contact
          </h1>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Let&apos;s talk.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Whether you have a software idea, need help with an existing product, or
              simply want to explore what might be possible, we&apos;d be happy to hear
              from you.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              Email
            </h2>
            <a
              className="mt-3 inline-block text-lg font-semibold hover:text-zinc-600 dark:hover:text-zinc-400"
              href="mailto:contact@atridae.co.uk"
            >
              contact@atridae.co.uk
            </a>
          </section>
        </div>
      </main>
    </>
  );
}