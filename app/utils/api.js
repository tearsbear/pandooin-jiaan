export const fetchItineraries = async () => {
  const response = await fetch(
    "https://pandooin.com/api/zamrood/itinerary?highlight=true"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchArticle = async () => {
  const response = await fetch("https://pandooin.com/api/zamrood/article");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
