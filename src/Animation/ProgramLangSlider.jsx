import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
const ProgramLangSlider = () => {
  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      perPage: 1,
      autoWidth: false,
      autoplay: true,
      interval: 1000,
      easing: "cubic-bezier(.42,.65,.27,.99)",
      drag: true,
      speed: 1,
      arrows: false,
      direction: "rtl",
      pagination: false,
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className="splide  mx-auto">
      <div className="splide__track ">
        <ul className="splide__list">
          <li className="splide__slide flex justify-center items-center">
            <img width={140} src="../images/javascript.png" alt="" />
          </li>
          <li className="splide__slide flex justify-center items-center">
            <img width={110} src="../images/typescript.png" alt="" />
          </li>
          <li className="splide__slide flex justify-center items-center">
            <img width={140} src="../images/php.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgramLangSlider;
