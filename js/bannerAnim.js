/* BANNER ANIMATION 
============================== */

/* BANNER LEFT SIDE */
const authorWrapper = document.querySelector('.reviewer-inner');
const authorTop = document.querySelector('.banner__title-top');
const authorDown = document.querySelector('.banner__title-down');

/* BANNER RIGHT SIDE */
const textWrapper = document.querySelector('.banner__content-2-inner');
const textTop = document.querySelector('.banner__chunk-top');
const textDown = document.querySelector('.banner__chunk-down');

/* SETTER FOR AUTHOR BANNER */
const setOpacityAuthorTop = () => {
  gsap.set(authorTop, { opacity: 1 });
}

const setOpacityAuthorDown = () => {
  gsap.set(authorDown, { opacity: 1 });
}

const authorTopSetTransparency = () => {
  gsap.set(authorTop, { opacity: 0 });
}

/* SETTER FOR TEXT BANNER */
const setOpacityTextTop = () => {
  gsap.set(textTop, { opacity: 1 });
}

const setOpacityTextDown = () => {
  gsap.set(textDown, { opacity: 1 });
}

const textTopSetTransparency = () => {
  gsap.set(textTop, { opacity: 0 });
}


/* TWEEN  GSAP */
const tweenAuthor = gsap.timeline({ repeat: -1 });
const tweenText = gsap.timeline({ repeat: -1 });

/* ATHOR TIMELINE */
/* yPercent: -50, */
tweenAuthor.to(authorWrapper, {
  duration: 0.5,
  y: "-6vw",
  delay: 4,
  onStart: authorTopSetTransparency,
  onComplete: setOpacityAuthorTop
})

/* yPercent: 0, */
.to(authorWrapper, {
  duration: 0.5,
  y: "0vw",
  delay: 4,
})

.to(authorDown, {
  duration: 0.3,
  autoAlpha: 0,
  ease: "expo.out",
  onComplete: setOpacityAuthorDown,
}, 
"-=0.6"
);


/* TEXT TIMELINE */
tweenText.to(textWrapper, {
  duration: 0.5,
  yPercent: -49,
  delay: 4,
  onStart: authorTopSetTransparency,
  onComplete: setOpacityAuthorTop
})

.to(textWrapper, {
  duration: 0.5,
  yPercent: 0,
  delay: 4,
})

.to(textDown, {
  duration: 0.3,
  autoAlpha: 0,
  ease: "expo.out",
  onComplete: setOpacityAuthorDown,
}, 
"-=0.6"
);



