import adultsAsset from "@/assets/conejo-5.jpg";
import couplesAsset from "@/assets/conejo-6.jpg";
import childrenAsset from "@/assets/conejo-7.jpg";
import { ArrowUpRight } from "lucide-react";

const help = [
  { title: "Adults", image: adultsAsset, alt: "Two adults sitting together at the water", description: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain." },
  { title: "Couples", image: couplesAsset, alt: "A couple embracing on the beach", description: "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship." },
  { title: "Children & Teens", image: childrenAsset, alt: "Two children playing together by the ocean", description: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment." },
];

export default function WhoWeHelp() {
  return (
    <section className="help-section" id="who-we-help" aria-labelledby="help-title">
        <h2 id="help-title">Who we <span className="script">help</span></h2>
        <div className="help-grid">{help.map(item => <article className="help-item" key={item.title}>
          <img src={item.image} alt={item.alt} loading="lazy" /><h3>{item.title}</h3><p>{item.description}</p><a className="text-link" href="#contact">Learn more <ArrowUpRight aria-hidden="true" size={17} /></a>
        </article>)}</div>
      </section>
  );
}
