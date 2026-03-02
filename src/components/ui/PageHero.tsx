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
        <img src={image} alt={alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/45 to-primary/30" />

        <div className="section-container absolute inset-0 flex items-center justify-center text-center">
          <Reveal>
            <h1 className="text-4xl font-bold text-white drop-shadow md:text-6xl">{title}</h1>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
