/* SIDEBAR ANIMATION 
============================== */

/* THE ANCHOR TAGS */
const anchorFirst = document.querySelector('.sb-achr-1');
const anchorSecond = document.querySelector('.sb-achr-2');
const anchorThird = document.querySelector('.sb-achr-3');

/* THE DRAWER (DIV) THAT CONTAINS LINK AND ITS COPIES */
const drawerFirst = document.querySelector('.drwr-1');
const drawerSecond = document.querySelector('.drwr-2');
const drawerThird = document.querySelector('.drwr-3');


/* "-52%" */

/* FIRST LINK */
anchorFirst.addEventListener('mouseover', (e) => {
  gsap.to(drawerFirst, {
    duration: 0.6,
    translateY: "-1vw",
    rotate: "-5deg",
    ease: "expo.easeOut",
  });
});

anchorFirst.addEventListener('mouseleave', (e) => {
  gsap.to(drawerFirst, {
    duration: 0.6,
    translateY: 0,
    rotate: 0,
    ease: "expo.easeOut",
  });
});


/* SECOND LINK */
anchorSecond.addEventListener('mouseover', () => {
  gsap.to(drawerSecond, {
    duration: 0.6,
    translateY: "-1vw",
    rotate: "-5deg",
    ease: "expo.easeOut",
  });
});

anchorSecond.addEventListener('mouseleave', () => {
  gsap.to(drawerSecond, {
    duration: 0.6,
    translateY: 0,
    rotate: 0,
    ease: "expo.easeOut",
  });
});

/* THIRD LINK */
anchorThird.addEventListener('mouseover', () => {
  gsap.to(drawerThird, {
    duration: 0.6,
    translateY: "-1vw",
    rotate: "-5deg",
    ease: "expo.easeOut",
  });
});

anchorThird.addEventListener('mouseleave', () => {
  gsap.to(drawerThird, {
    duration: 0.6,
    translateY: 0,
    rotate: 0,
    ease: "expo.easeOut",
  });
});


