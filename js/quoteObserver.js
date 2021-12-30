/* QUOTE OBSERVER ANIMATION 
============================== */

const quote = document.querySelector('.quote-sec');

/* SET THE INITIAL VALUE FOR EACH LINE OF TEXT.
To avoid to see the text in its initial position
on a fast scroll (before the observer go in action),
gsap set an intial value. */
gsap.set('.quote-h', {
  yPercent: 100,
});


const appearOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      gsap.to('.quote-h', {
        duration: 1,
        yPercent: 0,
        ease: "power4.out",
        stagger: 0.1,
      });
    }
  })
}, appearOptions);


appearOnScroll.observe(quote);
