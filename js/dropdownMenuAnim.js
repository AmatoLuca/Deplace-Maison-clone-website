/* DROPDOWN MENU MOBILE ANIMATION 
============================== */

const hamburger = document.querySelector('.menu-trigger');
const line1 = document.getElementById('toggle-line-1');
const line2 = document.getElementById('toggle-line-2');
const line3 = document.getElementById('toggle-line-3');
const menu = document.querySelector('.nav-menu');
const logo = document.querySelector('.logo-name-app');
const cart = document.querySelector('.cart-item');
const cartAmount = document.querySelector('.cart-amount');
const underline = document.querySelector('.menu-slot-underline');
const tabs = document.querySelector('.menu-slot-1__text__pop'); 
const headings = document.querySelectorAll('.link-pop');
const social_1 = document.querySelectorAll('.social-inner__slot-1 > a');
const social_2 = document.querySelectorAll('.social-inner__slot-2 > a');
const socialArrow = document.querySelectorAll('.arrow-box-wrp');
const menu_3 = document.querySelectorAll('.menu-slot-3');


const tl = gsap.timeline({ paused: true, reversed: true });

tl.to(line2, {
  autoAlpha: 0,
  y: 0,
}) 

.to(line1, {
    rotate: 44,
    width: "100%",
    x: 1,
    y: 6,
    ease: "power4.in",
  },
  "-=0.6"
)

.to(line3, {
    rotate: -43,
    width: "100%",
    x: 0,
    y: -6,
    ease: "power4.in",
  },
  "-=0.6"
)

.to(menu, {
    duration: 0.8,
    height: "100%",
    ease: "power4.inOut",
  }
)

.to(logo, {
  autoAlpha: 0,
  ease: "power4.in"
},
"-=1.2"
)

.to(line1, 
  {
    autoAlpha: 0,
    autoAlpha: 1,
    backgroundColor: "#fcf9ee",
    ease: "expo.in",
  },
  "-=1.2"
)

.to(line3, 
  {
    autoAlpha: 0,
    autoAlpha: 1,
    backgroundColor: "#fcf9ee",
    ease: "expo.in",
  },
  "-=1.2"
)

.to(cart, 
  {
    autoAlpha: 0,
    autoAlpha: 1,
    color: "#fcf9ee",
    ease: "power4.in",
  },
  "-=1.2"
)

.to(cartAmount, 
  {
    autoAlpha: 0,
    autoAlpha: 1,
    color: "#fcf9ee",
    ease: "power4.in",
  },
  "-=1.2"
)

.fromTo(underline, 
  {
    width: 0,
  },
  {
    duration: 0.5,
    width: "100%",
    transformOrigin: "left",
    ease: "expo.inOut",
  }
)

.from(tabs, {
    top: "120%",
    ease: "expo.inOut",
  }
)

.from(headings, {
    duration: 0.7, 
    autoAlpha: 0, 
    top: 100,  
    stagger: 0.1,
  },
  "-=0.6"
)

.from('.m-s-footer-link > a', {
    duration: 0.7, 
    autoAlpha: 0, 
    top: 100,  
  },
  "-=0.5"
)

.from(social_1, {
    duration: 0.8, 
    autoAlpha: 0, 
    top: 100, 
    ease: "power4.out",
  },
  "-=0.5"
)

.from(social_2, {
    duration: 0.8, 
    autoAlpha: 0, 
    top: 100, 
    ease: "power4.out",
  },
  "-=0.7"
)

.from(socialArrow, {
    duration: 1, 
    autoAlpha: 0, 
    top: 100,  
    ease: "expo.out",
  },
  "-=0.7"
) 

.from(menu_3, {
    duration: 0.7, 
    autoAlpha: 0,  
    y: "100%",
    ease: "power2.out",
  },
  "-=0.8"
);


hamburger.addEventListener('click', (e) => {  
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }

  toggleTween(tl);
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.timeScale(1.5).reverse();
}

