import sandAsset from "@/assets/conejo-11.jpg";
import handsAsset from "@/assets/conejo-12.jpg";
import { Button } from "@/components/ui/button";

export default function Appointment() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title"><img className="contact-image-left" src={sandAsset} alt="" aria-hidden="true" loading="lazy" /><div className="contact-copy"><p className="eyebrow">SCHEDULE AN APPOINTMENT</p><h2 id="contact-title">Find a therapist who is the right fit for <span className="script">you</span>.</h2><p>Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.</p>
    <p>Click the button below to schedule an appointment.</p><Button asChild variant="outline" className="oval-button"><a href="mailto:info@conejovalleycounseling.com">Book now</a></Button></div><img className="contact-image-right" src={handsAsset} alt="Hands making marks in the sand" loading="lazy" /></section>
  );
}
