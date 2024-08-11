export function getSvgUrl(name) {
  return new URL(`/assets/svg/${name}.svg`, import.meta.url).href
}
export function getImageUrl(name, extension = 'png') {
  return new URL(`/assets/images/${name}.${extension}`, import.meta.url).href
}