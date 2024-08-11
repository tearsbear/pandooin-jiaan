// components/HeroSection.js
import Image from "next/image";
import Navbar from "./navbar";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen">
      <Image
        src="/assets/bg.webp"
        alt="Background"
        fill
        className="object-cover object-center"
      />
      <Navbar />
      <div className="absolute top-1/2 -translate-y-1/2 text-white inset-x-0 w-full md:max-w-7xl mx-auto text-center md:text-left max-w-xs sm:max-w-sm">
        <h1 className="md:text-8xl text-6xl mb-4 font-signature z-color-primary">
          Premium Travel
        </h1>
        <h3 className="text-2xl mb-1 font-unbound-semi text-white">
          Beyond Expectation
        </h3>
        <p className="md:text-2xl mb-7 font-albert-regular whitespace-pre-line">
          Experience the finest that Indonesia has to offer with our {"\n"}
          curated selection of premium trips, ensuring comfort every step {"\n"}
          of the way
        </p>
        <button className="font-albert-bold border-2 border-white text-white transition-colors ease-in-out duration-300 bg-transparent px-7 py-3 rounded-full hover:bg-color-primary hover:border-color-primary">
          Take me there
        </button>
      </div>
    </section>
  );
}
