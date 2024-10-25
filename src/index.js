import { gsap } from "gsap";
gsap.registerPlugin(ScrollSmoother) 
/* The following plugin is a Club GSAP perk */
// import { SplitText } from "gsap/SplitText";
// gsap.registerPlugin(SplitText);

ScrollSmoother.create({
    smooth: 1,
    effects: true,
  });

import Rellax from "rellax";

let rellax = new Rellax('.rellax');
