import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import TripCard from "./tripCard";
import { fetchItineraries } from "../utils/api";

export default function ItinerariesSection() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["itineraries"],
    queryFn: fetchItineraries,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return data ? (
    <section className="container mx-auto p-8 flex flex-col gap-8">
      {data.data.map((itinerary, index) => (
        <div
          key={itinerary.itinerary_id}
          className={`flex flex-col md:flex-row gap-8 mb-20 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <div className="w-full md:w-1/2">
            {itinerary.related_galleries &&
              itinerary.related_galleries.length > 0 && (
                <Image
                  src={itinerary.related_galleries[0].src}
                  alt={itinerary.related_galleries[0].gallery_alt_text}
                  width={200}
                  height={200}
                  className="object-cover object-center w-full max-h-96"
                />
              )}
          </div>
          <TripCard key={itinerary.itinerary_id} itinerary={itinerary} />
        </div>
      ))}
    </section>
  ) : null;
}
