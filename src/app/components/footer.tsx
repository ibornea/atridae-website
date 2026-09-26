import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 px-6 py-8 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 sm:px-10">
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="font-semibold text-foreground">ATRIDAE LTD</p>
        <p>Registered in England and Wales · Company No. 17473530</p>
        <Link className="font-semibold hover:text-foreground" href="/privacy">
          Privacy
        </Link>
      </div>
    </footer>
  );
}