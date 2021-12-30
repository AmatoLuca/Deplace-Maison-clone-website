/* ABOUT PAGE ANIMATION 
============================== */

const aboutTween = gsap.timeline({ paused: true });

const introTextBlock = document.querySelector('.team__intro');

const firstCharacter = document.querySelector('.first-character');

const asideSlidePanel = document.querySelector('.team-aside-slide-panel');

const characterSlidePanel = document.querySelector('.component-character-slide-panel');

const charImage = document.querySelector('.char-first-pop');

const nameSide = document.querySelector('.component-name');


let introTextLines = gsap.utils.toArray('.team__intro-wide-wrp');

let charactersFaded = gsap.utils.toArray('.team__component:not(.first-character');  


// Scroll to top page to prevent the page 
// stay scrolled below duting inserting 
// the animated element in the DOM.
const autoScrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

const initAboutTween = () => {
  aboutTween.from(charactersFaded, {
    duration: 0.7,
    autoAlpha: 0,
    y: '150vh',
    onComplete: autoScrollTop,
    delay: 1.6,
  })

  .from(introTextBlock, {
    duration: 1.2,
    autoAlpha: 0,
    y: '30vw',
    ease: 'expo.out',
  })

  .from(firstCharacter, {
    duration: 0.2,
    autoAlpha: 0,
    ease: 'expo.out',
  }, "+=0.1")
  
  .from(introTextLines, {
    duration: 0.5,
    y: '2.5vw',
    stagger: 0.2,
  }, "-=1.29") 


  .fromTo(asideSlidePanel,
    { 
      display: 'block',
      xPercent: 0,
    },
    {
      duration: 0.9,
      xPercent: 100,
      ease: 'expo.out',
    },
    "<0.9"
  ) 

  .fromTo(characterSlidePanel, 
    {
      display: 'block',
      xPercent: 0,
    },
    {
      duration: 1,
      xPercent: 100,
      ease: 'expo.out',
    },
    "-=0.5"
  )

  .from(charImage, {
    duration: 0.8,
    yPercent: 100,
    ease: 'expo.out',
  }, "-=0.9")

  .from(nameSide, {
    duration: 0.5,
    yPercent: 100,
  }, "-=1.25");

  aboutTween.play();
}


// In large screen apply the animation
window.addEventListener('load', () => {
  if (window.matchMedia("(min-width: 991px)").matches) {
    initAboutTween();
  }
});












