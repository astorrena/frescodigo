gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: "#smoothwrapper",
  content: "#smooth-content",
  smooth: 2,
  smoothTouch: 0.1,
});
