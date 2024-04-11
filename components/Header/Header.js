import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed z-30 mix-blend-difference">
      <div className="fixed top-8 left-8 lg:top-16 lg:left-16">
        <Link href="/">
          <h1>David Lehmann</h1>
          <h2>UX/UI Designer & Creative Developer</h2>
        </Link>
      </div>
      <nav className="fixed top-8 right-8 lg:top-16 lg:right-16">
        <ul className="flex gap-4">
          <li>
            <Link href="/">Index</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
