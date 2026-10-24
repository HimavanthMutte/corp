import Image from "next/image";

type HeroProps = {
  title: string;
  altText: string;
  heroImage: string;
};

export default function Hero({ title, altText, heroImage }: HeroProps) {
  return (
    <section className="relative isolate h-screen overflow-hidden">
      <Image
        src={heroImage}
        alt={altText}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-900/80 to-transparent" />

      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-center text-4xl font-bold text-white md:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
