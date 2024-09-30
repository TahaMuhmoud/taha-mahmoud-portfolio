import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SectionHeader from "../components/SectionHeader";

import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

const About = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  useGSAP(
    () => {
      const ps: gsap.DOMTarget[] = gsap.utils.toArray(".aboutme");
      ps.forEach((p) => {
        gsap.fromTo(
          p,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: p,
              scrub: true,
              start: "top bottom",
              end: "top 40%",
            },
          }
        );
      });
    },
    { scope: container }
  );
  useGSAP(
    () => {
      const spans: gsap.DOMTarget[] = gsap.utils.toArray(".bold-span");

      spans.forEach((span) => {
        gsap.fromTo(
          span,
          {
            translateY: -10,
            opacity: 0,
            display: "inline-block",
          },
          {
            translateY: 0,
            opacity: 1,
            display: "inline-block",
            duration: 0.1,
            scrollTrigger: {
              trigger: span,
              scrub: true,
              start: "bottom bottom",
              end: "top 60%",
            },
          }
        );
      });
    },
    { scope: container }
  );

  return (
    <div id="about" className="w-full pt-[4rem]" ref={container}>
      <div className="w-full h-full">
        <SectionHeader
          title="About Me"
          titleTwo="Interactive Front-end developer."
        />
        <p className="aboutme text-xl font-txt text-secondary/90">
          I'm{" "}
          <span className="bold-span text-[22px] font-black text-secondary">
            Taha Mahmoud
          </span>
          , a 24-year-old Egyptian{" "}
          <span className="bold-span text-[22px] font-black text-secondary">
            software engineer
          </span>{" "}
          and{" "}
          <span className="bold-span text-[22px] font-black text-secondary">
            front-end developer
          </span>
          . I graduated with a bachelor's degree in Computer Science. I enjoy
          solving design problems, creating intuitive user interfaces, and
          developing engaging web experiences and applications. I have
          experience with front-end and UI technologies such as{" "}
          <span className="bold-span text-[22px] font-black text-secondary">
            HTML5, CSS3, Sass, Tailwind CSS, Bootstrap, JavaScript, TypeScript
            and ReactJS.
          </span>
        </p>
        <p className="aboutme text-xl font-txt text-secondary/90">
          Get your space suit ready and tell me your ideas to develop your dream
          website.
        </p>
      </div>
    </div>
  );
};

export default About;
