import CursorHover from "./CursorHover";
import { CONTACT_LINKS } from "../utils/constants";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HorizontalSocials = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  const container =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  useGSAP(
    () => {
      const socials: gsap.TweenTarget[] = gsap.utils.toArray(
        ".horizontal-socials .social"
      );

      socials.forEach((social, i) => {
        gsap.from(social, {
          y: -20,
          duration: 1,
          delay: 0.3 * i,
          yoyo: true,
          repeat: Infinity,
        });
      });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="horizontal-socials w-full h-auto flex items-center justify-center gap-3 text-4xl xl:text-3xl"
    >
      <div className="h-px w-full md:w-28 bg-secondary"></div>
      <ul className="flex items-center justify-center gap-3">
        {CONTACT_LINKS.map((link, i: number) => (
          <CursorHover key={i} className="social">
            <li>
              <a href={link.link} target="_blank">
                {link.icon}
              </a>
            </li>
          </CursorHover>
        ))}
      </ul>
      <div className="h-px w-full md:w-28 bg-secondary"></div>
    </div>
  );
};

export default HorizontalSocials;
