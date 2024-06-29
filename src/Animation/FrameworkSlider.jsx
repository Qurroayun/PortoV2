import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const FrameworkSlider = () => {
  useEffect(() => {
    const splide = new Splide(".frameworksplide", {
      type: "loop",
      perPage: 3,
      autoWidth: false,
      autoplay: true,
      interval: 3000,
      easing: "cubic-bezier(.42,.65,.27,.99)",
      drag: true,
      speed: 8000,
      arrows: false,
      direction: "ltr",
      pagination: false,
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className="splide  mx-auto frameworksplide rounded-full h-21 bg-dotss">
      <div className="splide__track rounded-full h-20">
        <ul className="splide__list">
          <li className="splide__slide flex flex-col justify-center items-center">
            <img width={90} src="./public/images/node.png" alt="NodeJS" />
          </li>
          <li className="splide__slide flex flex-col justify-center items-center">
            <img width={85} src="./public/images/react.png" alt="ReactJS" />
          </li>
          <li className="splide__slide flex flex-col justify-center items-center">
            <img width={85} src="./public/images/mendix.png" alt="Mendix" />
          </li>
          <li className="splide__slide flex flex-col justify-center items-center">
            <img
              width={170}
              src="./public/images/laravel-logo.wine.png"
              alt="Laravel"
            />
          </li>
          <li className="splide__slide flex flex-col justify-center items-center">
            <img width={90} src="./public/images/tailwind.png" alt="Tailwind" />
          </li>
          <li className="splide__slide flex flex-col justify-center items-center">
            <img
              width={90}
              src="./public/images/bootstrap.png"
              alt="Bootstrap"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FrameworkSlider;
