import React from "react";
import AutoSlider from "../Animation/AutoSlider";
import FrameworkSlider from "../Animation/FrameworkSlider";
import ProgramLangSlider from "../Animation/ProgramLangSlider";

const Skills = () => {
  return (
    <section id="skills">
      <div className="w-full min-h-screen flex items-center">
        <div
          className="container mx-auto"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <div className="badge bg-lime-400 w-48 h-10 text-xl indicator-skills">
            Skills
          </div>
          <div className="mt-10 xl:mt-36 flex flex-col xl:flex-row xl:justify-between gap-10">
            <div className="xl:w-1/3">
              <ProgramLangSlider />
            </div>
            <div className="xl:w-2/3 grid grid-cols-1 gap-4">
              <FrameworkSlider />
              <AutoSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
