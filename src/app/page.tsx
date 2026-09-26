import { Footer } from "./components/footer";
import { Header } from "./components/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-1 px-6 py-16 sm:px-10 sm:pt-12 sm:pb-24">
        <div className="max-w-2xl sm:max-w-4xl">
          <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Software that makes everyday things simpler.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            ATRIDAE designs and builds practical digital solutions around real needs
            — helping people and organisations get things done with less complexity.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
