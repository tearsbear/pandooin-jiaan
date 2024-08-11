import Image from "next/image";

export default function BeyondSection() {
  return (
    <section className="container mx-auto p-20">
      <h1 className="md:text-8xl text-4xl font-signature mb-4 text-center text-color-secondary">
        Beyond Premium
      </h1>
      <h2 className="md:text-3xl text-[#004040] font-unbound-semi mb-8 text-center">
        ELEVATE YOUR EXPERIENCE
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Grid Item 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/assets/icons/service.svg"
            alt="PERSONAL ITINERARIES"
            width={120}
            height={120}
            className="object-cover mb-4"
          />
          <h3 className="text-2xl text-center font-albert-regular mb-2 text-color-secondary">
            PERSONAL ITINERARIES
          </h3>
          <p className="text-gray-600 font-albert-regular text-center whitespace-pre-line">
            Our premium travel services offer tailor-made itineraries crafted to
            suit your unique {"\n"} preferences and desires.
          </p>
        </div>
        {/* Grid Item 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/assets/icons/crown.svg"
            alt="PERSONAL ITINERARIES"
            width={120}
            height={120}
            className="object-cover mb-4"
          />
          <h3 className="text-2xl text-center font-albert-regular mb-2 text-color-secondary">
            EXCLUSIVE EXPERIENCES
          </h3>
          <p className="text-gray-600 font-albert-regular text-center whitespace-pre-line">
            From private charters to behind-the-scenes tours, we offer access to
            unique opportunities that are designed to elevate your trip to the
            next level.
          </p>
        </div>
        {/* Grid Item 3 */}
        <div className="flex flex-col items-center">
          <Image
            src="/assets/icons/best.svg"
            alt="PERSONAL ITINERARIES"
            width={120}
            height={120}
            className="object-cover mb-4"
          />
          <h3 className="text-2xl text-center font-albert-regular mb-2 text-color-secondary">
            BEST FACILITIES
          </h3>
          <p className="text-gray-600 font-albert-regular text-center whitespace-pre-line">
            Experience the epitome of with our premium facility, designed to
            provide an unparalleled level of comfort and indulgence.
          </p>
        </div>
      </div>
    </section>
  );
}
