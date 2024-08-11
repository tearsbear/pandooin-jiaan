import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { fetchArticle } from "../utils/api";
import { truncateText } from "../utils/helper";

export default function ArticlesSection() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["articles"],
    queryFn: fetchArticle,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return data ? (
    <section className="container mx-auto mt-20 mb-10 md:p-0 p-3 flex flex-col gap-8">
      <div className="md:w-1/2">
        <h2 className="text-4xl font-unbound-medium text-color-secondary mb-4">
          Articles
        </h2>
        <p className="text-color-secondary text-lg font-albert-regular md:text-2xl">
          Our curated writings, offering something for every reader.
        </p>
      </div>

      <div className="md:w-full grid grid-cols-1 md:grid-cols-2 gap-5 relative">
        <div
          className="h-full relative cursor-pointer group hidden md:block"
          onClick={() =>
            window.open(
              `https://pandooin.com/blog/article/${data.data[0].slug}`,
              "_blank"
            )
          }
        >
          <Image
            src={data.data[0].featured_image} // Use the first article's image
            alt={data.data[0].featured_image_caption}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full bg-color-secondary p-6">
            <p className="text-white font-albert-medium text-md">
              {truncateText(data.data[0].title, 60)}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 h-full cursor-pointer">
          {data.data.slice(1, 5).map(
            (
              article,
              index // Display articles 1 to 4
            ) => (
              <div
                key={index}
                className="p-0 flex flex-col"
                onClick={() =>
                  window.open(
                    `https://pandooin.com/blog/article/${article.slug}`,
                    "_blank"
                  )
                }
              >
                <div className="relative h-48">
                  <Image
                    src={article.featured_image}
                    alt={article.featured_image_caption}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="bg-color-secondary p-6">
                  <p className="text-white font-albert-medium text-md">
                    {truncateText(article.title, 60)}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  ) : null;
}
