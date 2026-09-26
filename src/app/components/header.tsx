import Link from "next/link";

export function Header() {
  return (
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
            <Link className="hover:text-foreground" href="/how-we-think">
              How we think
            </Link>
          </li>
          <li>
            <Link className="hover:text-foreground" href="/what-we-do">
              What we do
            </Link>
          </li>
          <li>
            <Link className="hover:text-foreground" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}