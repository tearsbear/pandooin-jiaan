import Image from "next/image";

export default function DiscoverSection() {
  return (
    <section className="container mx-auto p-1 flex flex-col md:flex-row gap-8 items-center">
      <div className="w-full md:w-1/2 flex">
        <div className="m-auto">
          <Image
            src="/assets/icons/puzzle.webp"
            alt="Discover Tailored Experiences"
            width={300}
            height={300}
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left md:items-start items-center">
        <h2 className="text-3xl font-bold mb-4 text-color-secondary">
          Discover Tailored Experiences
        </h2>
        <p className="text-gray-600 font-albert-regular mb-6">
          Create your own journey, personalized to suit your preferences and
          interests, ensuring a once-in-a-lifetime adventure awaits.
        </p>
        <button className="font-albert-bold bg-color-secondary text-white transition-colors ease-in-out duration-300 px-7 py-3 rounded-full hover:bg-color-primary hover:border-color-primary w-fit">
          Customize Your Trip
        </button>
      </div>
    </section>
  );
}
