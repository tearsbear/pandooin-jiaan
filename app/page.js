"use client";

import Image from "next/image";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HeroSection from "./components/hero";
import BeyondSection from "./components/beyond";
import ItinerariesSection from "./components/itineraries";
import ArticlesSection from "./components/articles";
import DiscoverSection from "./components/discover";
import DummyTrip from "./components/dummyTrip";
import Gallery from "./components/gallery";
import Banner from "./components/banner";
import Footer from "./components/footer";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex flex-col min-h-screen">
        {/* Hero Section with Background Image */}
        <HeroSection />

        {/* Beyond Section */}
        <BeyondSection />

        {/* Discover Section */}
        <div id="discover-tailored-experiences" className="h-full mb-20"></div>
        <DiscoverSection />

        {/* Divider */}
        <section className="container mx-auto p-20 w-full max-w-7xl flex justify-center items-center">
          <Image
            src="/assets/divider.svg"
            alt="Discover Tailored Experiences"
            width={200}
            height={200}
            className="object-cover object-center w-full"
          />
        </section>

        {/* Destination */}
        <section className="container mx-auto p-8">
          <div className="md:flex items-center md:space-x-4">
            <h2 className="text-4xl font-unbound-bold text-[#004040] md:mr-3">
              Destinations
            </h2>
            <button className="group bg-transparent flex items-center mt-3 md:mt-0">
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
        <ItinerariesSection />
        {/* End Destination */}

        {/* Horizontal Card Dummy Trip */}
        <DummyTrip />

        {/* Gallery */}
        <Gallery />

        {/* Banner Divider */}
        <Banner />

        {/* Article */}
        <div id="article" className="md:mb-15"></div>
        <ArticlesSection />
        {/* End Article */}

        {/* Footer */}
        <Footer />
      </main>
    </QueryClientProvider>
  );
}
