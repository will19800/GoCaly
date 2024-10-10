import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <header className="flex flex-row justify-between p-4">
        <div className="flex flex-row">
          <Link href="{'/'}">GoCaly</Link>
          <nav>
            <Link href='{/features}'>Features</Link>
            <Link href='{/about}'>About</Link>
            <Link href='{/pricing}'>Pricing</Link>
          </nav>
        </div>
        <div>
          <nav>
            <Link href='{/signin}'>sign in</Link>
            <Link href='{/signin}'>Get Started</Link>
          </nav>
        </div>
      </header>
    </main>
  );
}
