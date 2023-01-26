export default function smoothImagesScroll() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  });
}
