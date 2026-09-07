import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Building2, HardHat, House, Sofa } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {name:"Modern Villa", type:"Residential", img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1500&q=90"},
  {name:"Commercial Complex", type:"Commercial", img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=90"},
  {name:"Luxury Interiors", type:"Interiors", img:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=90"},
];

const services = [
  {icon:House, title:"Residential Construction", text:"Custom homes built for modern living."},
  {icon:Building2, title:"Commercial Construction", text:"Functional spaces for growing businesses."},
  {icon:HardHat, title:"Renovation & Remodeling", text:"Transforming spaces with new possibilities."},
  {icon:Sofa, title:"Interior Execution", text:"Modern interiors that inspire."},
];

export default function Home() {
  return <>
    <Header />
    <main>
      <section className="relative min-h-[670px] overflow-hidden bg-white pt-[118px]">
        <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90" alt="Modern luxury building" fill priority unoptimized className="object-cover object-center" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container relative z-10 flex min-h-[552px] items-center">
          <div className="max-w-[560px] reveal-up">
            <div className="eyebrow orange">Quality. Precision. Trust.</div>
            <h1 className="serif mt-4 text-6xl md:text-[76px]">
              Premium Building<br />
              Solutions, <em className="orange">Built to Last</em>
            </h1>
            <p className="mt-6 max-w-[480px] text-sm leading-6 text-[#696b6e]">
              We deliver exceptional construction services across residential, commercial, and industrial projects. Craftsmanship, innovation, and integrity are at the core of everything we build.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#contact" className="bg-[#ef790c] px-6 py-4 text-[10px] font-bold uppercase tracking-[.12em] text-white">Get a Quote →</Link>
              <Link href="/projects" className="border border-[#8c8d8f] bg-white/80 px-6 py-4 text-[10px] font-bold uppercase tracking-[.12em]">View Our Work</Link>
            </div>
            <div className="mt-7 flex flex-wrap gap-7">
              {[["10+","Years Experience"],["100+","Projects Completed"],["100%","Client Satisfaction"]].map(([n,l])=>
                <div key={l} className="flex items-center gap-2"><BadgeCheck size={22}/><div><b className="text-sm">{n}</b><div className="text-[10px] text-[#696b6e]">{l}</div></div></div>
              )}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 hidden text-white md:block"><div className="text-xs tracking-widest">SPACES<br/>FOR A BETTER<br/>TOMORROW</div><div className="mt-2 h-[2px] w-20 bg-[#ef790c]"/></div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading kicker="Featured Projects" title="Spaces We’re Proud To Build" description="From dream homes to modern workspaces, we create spaces that inspire." />
            <Link href="/projects" className="orange text-[10px] font-bold uppercase tracking-[.15em]">View All Projects →</Link>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {projects.map((p) => <Link href="/projects" key={p.name} className="project-card group relative aspect-[1.25] overflow-hidden">
              <img src={p.img} alt={p.name} className="card-image h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-20 text-white">
                <h3 className="text-xl">{p.name}</h3><div className="mt-1 text-[10px] uppercase tracking-[.15em] text-white/65">{p.type}</div>
              </div>
              <span className="absolute bottom-5 right-5 text-white">→</span>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e1dfda] bg-[#faf9f7] py-16">
        <div className="container grid gap-10 md:grid-cols-[.8fr_1.7fr]">
          <SectionHeading kicker="Our Services" title="What We Do" description="End-to-end construction solutions with a focus on quality, safety, and timely delivery." />
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
            {services.map(({icon:Icon,title,text})=><div key={title} className="border-l border-[#dedbd5] px-5">
              <Icon size={34} strokeWidth={1.5} className="orange"/>
              <h3 className="mt-5 text-base font-bold">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-[#696b6e]">{text}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section id="process" className="grid md:grid-cols-2">
        <div className="relative min-h-[430px]"><Image src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=90" alt="Construction site" fill unoptimized className="object-cover"/></div>
        <div className="bg-[#f0eee9] px-7 py-14 md:px-14 md:py-20">
          <SectionHeading kicker="Our Process" title="From Foundation to Finish" description="A transparent and streamlined process for exceptional results." />
          <div className="mt-10 grid grid-cols-4">
            {[["01","Plan"],["02","Build"],["03","Detail"],["04","Handover"]].map(([n,t],i)=><div key={n} className="border-r border-[#d5d1ca] px-2 text-center last:border-0"><div className="text-xl font-bold">{n}</div><div className="mt-2 text-[10px] uppercase tracking-widest">{t}</div>{i<3&&<div className="mt-4 hidden text-[#888] md:block">→</div>}</div>)}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-16 md:py-20">
        <div className="container grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div><SectionHeading kicker="Why KK Constructions" title="Built on values that matter." /></div>
          <div className="grid gap-7 sm:grid-cols-2">
            {["Quality materials","Skilled execution","Transparent communication","On-time delivery"].map((x,i)=><div key={x} className="border-t border-[#ddd9d1] pt-5"><div className="orange text-xs font-bold">0{i+1}</div><h3 className="mt-2 text-lg font-bold">{x}</h3><p className="mt-2 text-xs leading-5 text-[#696b6e]">A dependable approach from planning through handover.</p></div>)}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2">
        <div className="bg-[#ef790c] px-7 py-12 md:px-14">
          <div className="eyebrow text-black/45">For Clients</div>
          <h2 className="serif mt-3 text-6xl text-white">Your Project.<br/>One Place.</h2>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/80">Track progress, view photos, access documents and stay updated — all in your client portal.</p>
          <Link href="/client" className="mt-7 inline-block bg-white px-6 py-4 text-[10px] font-bold uppercase tracking-[.13em]">Client Login →</Link>
        </div>
        <div id="contact" className="bg-[#292a2c] px-7 py-12 text-white md:px-14">
          <div className="eyebrow text-white/40">Start a Project</div>
          <h2 className="serif mt-3 text-6xl">Let’s Build<br/>Your Next Project</h2>
          <p className="mt-5 text-sm text-white/55">Get in touch for a free consultation and estimate.</p>
          <Link href="mailto:info@kkconstructions.in" className="mt-7 inline-block bg-[#ef790c] px-6 py-4 text-[10px] font-bold uppercase tracking-[.13em]">Contact Us →</Link>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}