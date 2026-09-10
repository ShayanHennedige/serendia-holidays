interface InnerHeroProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  showFullImage?: boolean;
}

export default function InnerHero({ title, subtitle, bgImage, showFullImage = false }: InnerHeroProps) {
  return (
    <section 
      className={`inner-hero${showFullImage ? ' inner-hero-full-image' : ''}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="inner-hero-content fade-in visible">
        <h1 className="inner-hero-title">{title}</h1>
        {subtitle && <p className="inner-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
