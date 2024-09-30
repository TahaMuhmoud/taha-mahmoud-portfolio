import CursorHover from "../components/CursorHover";
import SectionHeader from "../components/SectionHeader";
import { SKILLS } from "../utils/constants";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Skills = () => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
  // useGSAP(
  //   () => {
  //     const skills: gsap.DOMTarget[] = gsap.utils.toArray(".skill");
  //     skills.forEach((skill) => {
  //       gsap.from(skill, {
  //         y: 100,
  //         x: -200,
  //         opacity: 0,
  //         scrollTrigger: {
  //           trigger: skill,
  //           scrub: true,
  //           start: "top bottom",
  //           end: "top 70%",
  //         },
  //       });
  //     });
  //     const logos: gsap.DOMTarget[] = gsap.utils.toArray(".logo");
  //     logos.forEach((logo) => {
  //       gsap.from(logo, {
  //         x: 50,
  //         opacity: 0,
  //         scrollTrigger: {
  //           trigger: logo,
  //           scrub: true,
  //           start: "top bottom",
  //           end: "bottom top",
  //         },
  //       });
  //     });
  //     const names: gsap.DOMTarget[] = gsap.utils.toArray(".name");
  //     names.forEach((name) => {
  //       gsap.fromTo(
  //         name,
  //         { opacity: 0.5 },
  //         {
  //           opacity: 1,
  //           scrollTrigger: {
  //             trigger: name,
  //             scrub: true,
  //             start: "top bottom",
  //             end: "top 40%",
  //           },
  //         }
  //       );
  //     });
  //   },

  //   { scope: container }
  // );
  return (
    <div id="skills" className="w-full pt-[4rem]" ref={container}>
      <SectionHeader title="Skills" titleTwo="My skills and technologies" />
      <div className="skills">
        <div className="flex gap-3 flex-wrap items-center justify-center">
          {SKILLS?.map((skill, i: number) => (
            <CursorHover key={i} className="skill">
              <div className="w-36 sm:w-48 aspect-square bg-secondary/20 p-3 grid place-items-center">
                <div
                  className="logo w-10 sm:w-16"
                  dangerouslySetInnerHTML={{ __html: skill.logo }}
                ></div>

                <h6 className="name text-xl sm:text-2xl font-txt pt-1 text-center">
                  {skill.title}
                </h6>
              </div>
            </CursorHover>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
