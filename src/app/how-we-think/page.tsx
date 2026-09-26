import { Footer } from "../components/footer";
import { Header } from "../components/header";

export default function HowWeThink() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-6 py-16 sm:px-10 sm:pt-12 sm:pb-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            How we think
          </h1>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Simple. Useful. Human.
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              We start with the people who will use a product and the problem it needs
              to solve. We aim to build software that is understandable, practical and
              appropriate for the job — rather than adding technology for its own sake.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              A new company built on long experience.
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>
                ATRIDAE is a new UK software company, built on more than two decades
                of experience across different areas of software development and
                delivery.
              </p>
              <p>
                The experience behind the company spans a wide range of software —
                from video games to mobile, web and standalone applications, as well
                as software used in complex business environments.
              </p>
              <p>
                That variety has shaped a simple view of software: technology is most
                useful when it solves a real problem without creating unnecessary
                complexity.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}