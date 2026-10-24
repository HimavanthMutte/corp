import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-20 w-full p-6">
      <nav className="flex gap-6 text-white">
        <Link href="/">Home</Link>
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">Reliability</Link>
        <Link href="/scale">Scale</Link>
      </nav>
    </header>
  );
}
