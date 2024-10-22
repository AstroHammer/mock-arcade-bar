import { gsap } from "./gsap";

/* The following plugin is a Club GSAP perk */
import { SplitText } from "./gsap/SplitText";


gsap.registerPlugin(SplitText);


var split = new SplitText("h1", {type: "chars"});

gsap.from(split.chars, {
    duration: 1,
    y: 100,
    autoAlpha: 0,
    stagger: 0.05
});