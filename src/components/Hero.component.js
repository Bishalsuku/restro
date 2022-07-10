import React, { useEffect } from "react";

import heroSection from "../img/hero-section.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    try {
      gsap.to("menuContainer", {
        ScrollTrigger: {
          scrub: true,
        },
        y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.1,
        ease: "none",
        yoyo: true,
      });
    } catch (error) {}
  }, []);
  return (
    <>
      <div className="heroContainer">
        <img src={heroSection} alt="heroSection" />
        <div className="heroBox">
          <div className="heroBoxWrapper">
            <h1>HAVE YOU TRIED OUR FOOD YET? VISIT US TODAY!</h1>
            <div className="yellowPart"></div>
          </div>
          <div className="lines">
            <div className="line first"></div>
            <div className="line sec"></div>
            <div className="line third"></div>
          </div>
          <button>Menu</button>
          <div className="dots">
            <div className="active-dot">
              <div className="dot"></div>
            </div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
