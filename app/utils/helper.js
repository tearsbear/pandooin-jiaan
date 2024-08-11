export function truncateText(text, maxLength) {
  if (!text || typeof text !== "string") {
    return "";
  }

  if (text.length <= maxLength) {
    return text;
  } else {
    return text.substring(0, maxLength - 3) + "...";
  }
}
