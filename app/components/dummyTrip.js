import Image from "next/image";

export default function DummyTrip() {
  const dummyTrip = [
    {
      title: "Paradise Gateway: Labuan Bajo",
      imageUrl: "/assets/bg.webp",
      price: 5200000,
    },
    {
      title: "Paradise Gateway: Labuan Bajo",
      imageUrl: "/assets/bg.webp",
      price: 5200000,
    },
    {
      title: "Paradise Gateway: Labuan Bajo",
      imageUrl: "/assets/bg.webp",
      price: 5200000,
    },
    {
      title: "Paradise Gateway: Labuan Bajo",
      imageUrl: "/assets/bg.webp",
      price: 5200000,
    },
  ];
  return (
    <section className="container mx-auto p-0 mb-10">
      <div className="flex overflow-x-auto pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap gap-4 ml-3">
          {dummyTrip.map((trip, index) => (
            <div
              key={index}
              className="inline-block px-3 w-64 md:w-1/3 lg:w-1/4"
            >
              <Image
                src={trip.imageUrl}
                alt={trip.title}
                width={200}
                height={200}
                className="object-cover object-center w-full h-56 mb-4"
              />
              <span className="text-xs mb-2 text-[#004040] uppercase">
                7 DAYS 6 NIGHTS
              </span>
              <h3 className="text-lg font-unbound-semi mb-2 text-color-secondary">
                {trip.title}
              </h3>
              <p className="text-[#004040] font-albert-medium text-sm mb-4">
                Organized by Pandooin
              </p>
              <span className="text-[#004040] text-xs font-albert-regular">
                Start from
              </span>
              <span className="text-lg font-unbound-medium text-color-secondary flex mb-5">
                IDR {new Intl.NumberFormat("id-ID").format(trip.price)}
              </span>
              <button className="font-albert-bold border-2 border-color-secondary text-color-secondary transition-colors ease-in-out duration-300 bg-transparent px-4 py-2 rounded-full hover:bg-color-secondary hover:border-color-secondary hover:text-white">
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex md:justify-end justify-center md:mt-10">
        <button className="group bg-transparent flex items-center mt-10">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="stroke-color-secondary group-hover:stroke-color-primary transition-colors ease-in-out duration-300"
          >
            <path
              d="M17.6458 14.1471C17.8407 13.9515 18.1573 13.9509 18.3529 14.1458L23.8374 19.6108C24.0531 19.8257 24.0531 20.1751 23.8374 20.39L18.3529 25.855C18.1573 26.0499 17.8407 26.0493 17.6458 25.8537C17.4509 25.6581 17.4515 25.3415 17.6471 25.1466L22.8117 20.0004L17.6471 14.8542C17.4515 14.6593 17.4509 14.3427 17.6458 14.1471Z"
              fill="#004040"
            ></path>
            <rect
              x="1"
              y="1"
              width="38"
              height="38"
              rx="19"
              stroke-width="2"
            ></rect>
          </svg>
          <span className="ml-4 text-color-secondary transition-colors ease-in-out duration-300 uppercase font-albert-bold group-hover:text-color-primary">
            Explore More
          </span>
        </button>
      </div>
    </section>
  );
}
