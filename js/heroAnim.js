/* HERO ANIMATION 
============================== */

/* WRAPPER IMAGE */
const boxOne = document.querySelector('.ye-1-mov');
const boxOneImg = document.querySelector('.ye-1-mov > img');
/* IMAGE */
const boxTwo = document.querySelector('.or-1-mov');
const boxTwoImg = document.querySelector('.or-1-mov > img');
/* SYMBOL VIRGOLETTE */
const scotch = document.querySelector('.scotch-tape');
/* TEXT APPEAR */
const textTop = document.querySelector('.hero__h-up');
const textBottom = document.querySelector('.hero__h-down');
const coll = document.querySelector('.hero__spec');
const logo = document.querySelector('.logo-name-p2');

/* VIEWPORT SIZE */
let viewport = window.innerWidth;


/* GSAP */
const tl = gsap.timeline();

tl.from(boxOne, {
  duration: 1.6,
  autoAlpha: 0,
  y: 200,
  delay: 2.4,
  ease: "expo.out",
})

.from(boxOneImg, {
    duration: 1.8,
    scale: 1.2,
    transformOrigin: "center",
    ease: "expo.out",
  },
  "-=1.5"
)

.from(boxTwo, {
    duration: 1.6,
    autoAlpha: 0,
    y: 200,
    ease: "expo.out",
  },
  "-=1.7"
)

.from(boxTwoImg, {
  duration: 1.8,
  scale: 1.1,
  transformOrigin: "center",
  ease: "expo.out",
},
"-=1.5"
)

.from(scotch, {
    duration: 1,
    autoAlpha: 0,
    ease: "expo.out",
  },
  "-=1.5"
)

.from(textTop, {
    duration: 1.4,
    //y: 80,
    y: "100%",
    ease: "power4.out",
  },
  "-=1.7"
)

.from(textBottom, {
    duration: 1.1,
    //y: 80,
    y: "100%",
    ease: "power4.out",
  },
  "-=1.5"
)

.from(coll, {
  duration: 0.5,
  autoAlpha: 0,
  ease: "power4.out",
},
"-=1.5"
);

if (viewport >= 991) {
  gsap.from(logo, {
      duration: 1.2,
      autoAlpha: 0,
      translateY: "100%",
      ease: "power4.out",
    },
    "-=1.5"
  );
}
