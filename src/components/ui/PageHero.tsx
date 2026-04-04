import Reveal from "@/components/ui/Reveal";

interface PageHeroProps {
  title: string;
  image: string;
  alt: string;
}

const PageHero = ({ title, image, alt }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-20">
      <div className="relative h-[38vh] min-h-[260px] md:h-[44vh]">
        <img src={image} alt={alt} className="animate-kenburns h-full w-full object-cover object-center" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/42 to-primary/26" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),_transparent_30%),linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.32))]" />
        <div className="absolute inset-x-6 bottom-6 top-6 rounded-[2rem] border border-white/10 bg-white/0 md:inset-x-10" />

        <div className="section-container absolute inset-0 flex items-center justify-center text-center">
          <Reveal>
            <h1 className="text-balance text-4xl font-semibold text-white drop-shadow-[0_12px_36px_rgba(0,0,0,0.32)] md:text-6xl">{title}</h1>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
