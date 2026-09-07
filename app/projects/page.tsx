import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projects = [
  ["Modern Villa","Residential","Bangalore","https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=90"],
  ["Commercial Complex","Commercial","Bangalore","https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90"],
  ["Luxury Interiors","Interiors","Karnataka","https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"],
  ["Private Residence","Residential","Karnataka","https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=90"]
];

export default function Projects(){
 return <><Header/><main className="bg-[#f8f7f4] pt-32"><div className="container py-14 md:py-20"><div className="eyebrow orange">Our Portfolio</div><h1 className="serif mt-4 text-7xl md:text-[105px]">PROJECTS<br/><em className="orange">THAT LAST.</em></h1></div><div className="container grid gap-7 pb-24 md:grid-cols-2">{projects.map((p,i)=><Link href="/projects" className={`group overflow-hidden ${i%3===1?"md:mt-16":""}`} key={p[0]}><div className="relative aspect-[4/3] overflow-hidden"><Image src={p[3]} alt={p[0]} fill unoptimized className="object-cover transition duration-700 group-hover:scale-105"/></div><div className="border-b border-[#ddd9d1] py-5 flex justify-between"><div><h2 className="text-2xl">{p[0]}</h2><p className="mt-2 text-[10px] uppercase tracking-[.15em] text-[#777]">{p[1]} · {p[2]}</p></div><span className="orange">0{i+1} →</span></div></Link>)}</div></main><Footer/></>;
}