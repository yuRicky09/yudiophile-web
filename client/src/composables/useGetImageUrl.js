export function useGetImageUrl(imgName) {
  return new URL(`../assets/images/${imgName}`, import.meta.url).href;
}
