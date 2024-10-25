import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
/* The following plugin is a Club GSAP perk */
// import { SplitText } from "gsap/SplitText";
// gsap.registerPlugin(SplitText);

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 1,
    effects: true,
  });

import Rellax from "rellax";

let rellax = new Rellax('.rellax');
