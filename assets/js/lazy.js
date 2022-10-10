const imgs = [...document.querySelectorAll("img.lazy")];
let count = 0;

const updateCount = (count) => {
  document.querySelector("span").textContent = count;
};

const lazyImageObserver = new IntersectionObserver(function (
  entries,
  observer,
) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      setTimeout(() => {
        const lazyImage = entry.target;
        const bound = lazyImage.getBoundingClientRect();
        if (bound.top <= window.innerHeight && bound.bottom >= 0) {
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
          updateCount(++count);
        }
      }, 300);
    }
  });
});

imgs.forEach(function (lazyImage) {
  lazyImageObserver.observe(lazyImage);
});
