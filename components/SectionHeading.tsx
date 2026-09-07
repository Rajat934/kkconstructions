export default function SectionHeading({kicker,title,description}:{kicker:string;title:string;description?:string}) {
  return <div>
    <div className="eyebrow orange">{kicker}</div>
    <h2 className="serif mt-3 text-5xl md:text-6xl">{title}</h2>
    {description && <p className="mt-3 max-w-2xl text-sm leading-6 text-[#696b6e]">{description}</p>}
  </div>
}