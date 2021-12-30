// Reload page based on certain range of screen width
const viewportObserver = () => {
  const smallDevice = "(min-width: 479px)";
  const mediumDevice = "(min-width: 769px)";
  const largeDevice = "(min-width: 991px)";

  if (window.matchMedia(smallDevice).matches) {
    location.reload();
  } else if (window.matchMedia(mediumDevice).matches) {
    location.reload();
  } else if (window.matchMedia(largeDevice).matches) {
    location.reload();
  } else {
    return;
  }
};

window.addEventListener('resize', () => {
  viewportObserver();
});