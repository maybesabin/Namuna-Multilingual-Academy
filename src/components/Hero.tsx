interface HeroProps {
  title: string;
  description: string;
}

const Hero = ({ title, description }: HeroProps) => {
  return (
    <section className="relative min-h-105 flex items-center justify-center text-center overflow-hidden bg-linear-to-br from-[#1c3a6e] via-[#2c5aa8] to-[#3f74c9]">

      {/* dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a1937]/25 via-[#0a1937]/55 to-[#0a1937]/85"></div>

      {/* soft radial accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.10),transparent_45%)]"></div>

      {/* content */}
      <div className="relative z-10 px-6 text-white">
        <h1 className="text-4xl font-serif md:text-5xl font-bold tracking-wide">
          {title}
        </h1>

        <p className="max-w-xl mx-auto mt-4 md:text-lg text-sm leading-relaxed text-[#e4ecfb]">
          {description}
        </p>
      </div>

      {/* curved bottom edge */}
      <div
        className="absolute left-0 right-0 -bottom-px h-14 bg-white"
        style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}
      ></div>
    </section>
  );
};

export default Hero;
