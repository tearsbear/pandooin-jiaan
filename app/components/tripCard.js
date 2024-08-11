import { truncateText } from "../utils/helper";

export default function TripCard({ itinerary }) {
  return (
    <div className="w-full md:w-1/2 flex flex-col">
      <span className="text-sm md:text-md mb-2 text-[#004040] uppercase">
        {itinerary.itinerary_day} DAYS {itinerary.itinerary_day - 1} NIGHTS
      </span>
      <h2 className="md:text-3xl font-unbound-semi mb-2 text-color-secondary">
        {truncateText(itinerary.itinerary_name, 58)}
      </h2>
      <p className="text-[#004040] font-albert-semi mb-4">
        Organized by {itinerary.partner_name}
      </p>
      <p className="text-gray-600 mb-4">
        {truncateText(itinerary.itinerary_short_description, 310)}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-4 h-full items-end">
        <div>
          <span className="text-[#004040] text-sm md:text-lg font-albert-regular flex">
            Start from
          </span>
          <span className="text-gray-400 font-unbound-regular line-through flex">
            IDR{" "}
            {new Intl.NumberFormat("id-ID").format(
              parseInt(
                itinerary.related_variant.itinerary_variant_pub_price,
                10
              ) + 1000000 // Add markup price
            )}
          </span>
          <span className="md:text-3xl font-unbound-semi text-color-secondary flex">
            {/* show discounted price if available, otherwise original price */}
            IDR{" "}
            {new Intl.NumberFormat("id-ID").format(
              itinerary.related_variant.itinerary_variant_disc_price > 0
                ? itinerary.related_variant.itinerary_variant_disc_price
                : itinerary.related_variant.itinerary_variant_pub_price
            )}
          </span>
        </div>
        <div className="flex justify-end w-full">
          <button className="font-albert-bold border-2 border-color-secondary text-color-secondary transition-colors ease-in-out duration-300 bg-transparent px-7 py-3 rounded-full hover:bg-color-secondary hover:border-color-secondary hover:text-white">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
}
