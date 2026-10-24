import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Home page</div>
      <Link href="/performance">Performance</Link>
      <Link href="/reliability">Reliability</Link>
      <Link href="/scale">Scale</Link>
    </>
  );
}
