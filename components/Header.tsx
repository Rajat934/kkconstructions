import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="hidden bg-[#292a2c] text-white md:block">
        <div className="container flex h-9 items-center justify-between text-[10px]">
          <span className="text-white/75">Building Better Lives</span>
          <div className="flex gap-5 text-white/70">
            <span>📍 Bangalore, India</span>
            <span>☎ +91 98765 43210</span>
            <span>✉ info@kkconstructions.in</span>
            <span>f</span><span>◎</span><span>in</span>
          </div>
        </div>
      </div>

      <header className="absolute left-0 right-0 top-9 z-30 bg-white/95 nav-shadow">
        <div className="container flex min-h-[78px] items-center justify-between gap-5">
         <Link href="/" className="flex flex-col items-center justify-center">
  <Image
    src="/logo.jpg"
    width={150}
    height={75}
    alt="KK Constructions"
    className="h-[52px] w-auto object-contain"
    priority
  />

  <span className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#292a2c]">
    KK Constructions
  </span>
</Link>

          <nav className="hidden items-center gap-7 text-[11px] font-medium lg:flex">
            <Link className="border-b-2 border-[#ef790c] py-7" href="/">Home</Link>
            <Link className="py-7 hover:text-[#ef790c]" href="/#about">About Us</Link>
            <Link className="py-7 hover:text-[#ef790c]" href="/services">Services</Link>
            <Link className="py-7 hover:text-[#ef790c]" href="/projects">Projects</Link>
            <Link className="py-7 hover:text-[#ef790c]" href="/#process">Process</Link>
            <Link className="py-7 hover:text-[#ef790c]" href="/client">Client Portal</Link>
            <Link className="py-7 hover:text-[#ef790c]" href="/#news">News</Link>
            <Link className="py-7 hover:text-[#ef790c]" href="/#contact">Contact</Link>
          </nav>

          <Link href="/#contact" className="bg-[#ef790c] px-5 py-3.5 text-[10px] font-bold uppercase tracking-[.12em] text-white transition hover:bg-[#d96500]">
            Get a Quote →
          </Link>
        </div>
      </header>
    </>
  );
}