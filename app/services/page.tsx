import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const services = [
 ["01","Residential Construction","Custom homes planned and delivered around your lifestyle, site and vision."],
 ["02","Commercial Construction","Modern, practical environments built around operational needs and long-term value."],
 ["03","Renovation & Remodeling","Careful transformation of existing spaces with minimal disruption and thoughtful detailing."],
 ["04","Interior Execution","Finishes, carpentry, flooring, lighting coordination and the details that complete a space."],
 ["05","Project Management","Clear coordination across people, materials, schedules, site activities and handover."]
];

export default function Services(){return <><Header/><main className="pt-32 bg-[#f8f7f4]"><div className="container py-16"><SectionHeading kicker="Capabilities" title="What We Do" description="End-to-end construction services designed around quality, transparency and dependable delivery." /></div><section className="bg-[#292a2c] text-white"><div className="container divide-y divide-white/10">{services.map(s=><div key={s[0]} className="grid gap-5 py-12 md:grid-cols-[.12fr_1fr_.8fr] md:items-center"><span className="orange font-bold">{s[0]}</span><h2 className="text-3xl md:text-5xl">{s[1]}</h2><p className="text-sm leading-6 text-white/50">{s[2]}</p></div>)}</div></section></main><Footer/></>}
