import Image from "next/image";

type HeroProps = {
  title: string;
  altText: string;
  heroImage: string;
};

export default function Hero({ title, altText, heroImage }: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image src={heroImage} alt={altText} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-6xl text-white">{title}</h1>
      </div>
    </div>
  );
}
