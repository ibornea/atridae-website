import { Footer } from "../components/footer";
import { Header } from "../components/header";

export default function WhatWeDo() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-6 py-16 sm:px-10 sm:pt-12 sm:pb-24">
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
      <Footer />
    </div>
  );
}