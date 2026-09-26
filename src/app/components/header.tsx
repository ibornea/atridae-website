"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between gap-8 px-6 py-6 sm:px-10">
      <Link
        aria-label="ATRIDAE home"
        className="shrink-0"
        href="/"
      >
        <Image
          alt="ATRIDAE"
          className="h-11 w-auto dark:hidden sm:h-12"
          height={124}
          priority
          src="/atridae-logo.svg"
          width={505}
        />
        <Image
          alt="ATRIDAE"
          className="hidden h-11 w-auto dark:block sm:h-12"
          height={124}
          priority
          src="/atridae-logo-white.svg"
          width={505}
        />
      </Link>
      <nav
        aria-label="Primary navigation"
        className="hidden overflow-x-auto sm:block"
      >
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
      <button
        aria-controls="mobile-primary-navigation"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
        className="flex size-11 shrink-0 items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground dark:text-zinc-400 dark:hover:bg-zinc-900 sm:hidden"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        type="button"
      >
        <span className="sr-only">Menu</span>
        <span aria-hidden="true" className="flex w-5 flex-col gap-1">
          <span className="h-0.5 w-full bg-current" />
          <span className="h-0.5 w-full bg-current" />
          <span className="h-0.5 w-full bg-current" />
        </span>
      </button>
      {isMenuOpen && (
        <nav
          aria-label="Mobile primary navigation"
          className="absolute top-full right-6 z-10 w-52 rounded-md border border-zinc-200 bg-background p-2 shadow-lg dark:border-zinc-800 sm:hidden"
          id="mobile-primary-navigation"
        >
          <ul className="flex flex-col text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            <li>
              <Link
                className="block rounded px-3 py-2 hover:bg-zinc-100 hover:text-foreground dark:hover:bg-zinc-900"
                href="/how-we-think"
                onClick={() => setIsMenuOpen(false)}
              >
                How we think
              </Link>
            </li>
            <li>
              <Link
                className="block rounded px-3 py-2 hover:bg-zinc-100 hover:text-foreground dark:hover:bg-zinc-900"
                href="/what-we-do"
                onClick={() => setIsMenuOpen(false)}
              >
                What we do
              </Link>
            </li>
            <li>
              <Link
                className="block rounded px-3 py-2 hover:bg-zinc-100 hover:text-foreground dark:hover:bg-zinc-900"
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}