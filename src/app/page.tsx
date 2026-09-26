export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between gap-8 px-6 py-6 sm:px-10">
        <p className="shrink-0 text-2xl font-semibold tracking-[0.2em]">ATRIDAE</p>
        <nav aria-label="Primary navigation" className="overflow-x-auto">
          <ul className="flex w-max items-center gap-6 whitespace-nowrap text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            <li>
              <a className="hover:text-foreground" href="#what-we-do">
                What we do
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="#how-we-think">
                How we think
              </a>
            </li>
            <li>
              <a className="hover:text-foreground" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

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
    </>
  );
}
