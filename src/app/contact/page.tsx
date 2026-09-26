import { Footer } from "../components/footer";
import { Header } from "../components/header";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-6 py-16 sm:px-10 sm:pt-12 sm:pb-24">
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
      <Footer />
    </div>
  );
}