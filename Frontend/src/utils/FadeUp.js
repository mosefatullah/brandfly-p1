import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const fadeUp = () => {
 const fadeUpElements = gsap.utils.toArray(".fade-up");
 fadeUpElements.forEach((element) => {
  gsap.set(element, { y: 100, opacity: 0 });
 });
 fadeUpElements.forEach((element) => {
  gsap.to(element, {
   scrollTrigger: {
    trigger: element,
    start: "top bottom",
    toggleActions: "play none none reverse",
   },
   y: 0,
   opacity: 1,
   duration: 0.5,
   ease: "power1.out",
  });
 });
};

ScrollTrigger.refresh();
