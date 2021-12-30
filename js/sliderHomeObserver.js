/* SLIDER HOME ANIMATION 
============================== */

const carousel = document.querySelector('.carousel');

/* SET THE INITIAL VALUE FOR THE SLIDER.
To avoid to see the slider in its initial position
on a fast scroll (before the observer go in action),
gsap set an intial value. */
gsap.set(carousel, {
  xPercent: 30,
  autoAlpha: 0,
});

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      gsap.to(carousel, {
        duration: 1,
        autoAlpha: 1,
        xPercent: 0,
        ease: "power4.out",
      });
    }
  })
}, appearOptions);


appearOnScroll.observe(carousel);
