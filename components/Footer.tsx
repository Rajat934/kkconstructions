import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#202124] text-white">
      <div className="container grid gap-12 py-14 md:grid-cols-[1.2fr_.7fr_.7fr_1fr]">
        <div>
          <Image src="/logo.jpg" width={210} height={90} alt="KK Constructions" className="h-20 w-auto object-contain object-left brightness-110" />
          <p className="mt-5 max-w-xs text-xs leading-6 text-white/45">
            Building thoughtful spaces with quality, precision and trust.
          </p>
        </div>
        <div>
          <div className="eyebrow text-white/35">Quick Links</div>
          <div className="mt-5 grid gap-3 text-sm text-white/65">
            <Link href="/">Home</Link><Link href="/#about">About Us</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link>
          </div>
        </div>
        <div>
          <div className="eyebrow text-white/35">Support</div>
          <div className="mt-5 grid gap-3 text-sm text-white/65">
            <Link href="/client">Client Portal</Link><Link href="/#contact">Contact</Link><span>Privacy Policy</span><span>Terms & Conditions</span>
          </div>
        </div>
        <div>
          <div className="eyebrow text-white/35">Contact Info</div>
          <div className="mt-5 grid gap-3 text-sm text-white/65">
            <span>📍 Bangalore, India</span><span>☎ +91 98765 43210</span><span>✉ info@kkconstructions.in</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-3 py-5 text-[10px] uppercase tracking-[.12em] text-white/30 md:flex-row md:justify-between">
          <span>© 2026 KK Constructions. All rights reserved.</span><span>Built with purpose.</span>
        </div>
      </div>
    </footer>
  );
}