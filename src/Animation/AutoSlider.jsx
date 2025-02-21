import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";

const AutoSlider = () => {
  useEffect(() => {
    const splide = new Splide(".autosplide", {
      type: "loop",
      perPage: 3,
      autoWidth: false,
      autoplay: true,
      interval: 3000,
      easing: "cubic-bezier(.42,.65,.27,.99)",
      drag: true,
      speed: 8000,
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
    <div className="splide p-1 mx-auto autosplide rounded-full h-21 bg-dots">
      <div className="splide__track rounded-full h-20">
        <ul className="splide__list">
          <li className="splide__slide flex justify-center items-center">
            <img width={70} src="../images/github.png" alt="Github" />
          </li>
          <li className="splide__slide flex justify-center items-center">
            <img width={75} src="../images/redis.png" alt="Redis" />
          </li>
          <li className="splide__slide flex justify-center items-center">
            <img width={60} src="../images/rabbitmq.svg" alt="RabbitMq" />
          </li>
          <li className="splide__slide flex justify-center items-center">
            <img width={70} src="../images/babeljs.png" alt="BabelJS" />
          </li>
          <li className="splide__slide flex justify-center items-center">
            <img width={110} src="../images/jest.png" alt="Jest" />
          </li>
          <li className="splide__slide flex justify-center items-center">
            <img width={90} src="../images/docker.png" alt="Docker" />
          </li>
          <li className="splide__slide flex justify-center items-center">
            <img width={100} src="../images/mysqldb.png" alt="Mysql" />
          </li>
          <li className="splide__slide flex justify-center items-center">
            <img width={140} src="../images/mongodb.png" alt="MongoDB" />
          </li>
          <li className="splide__slide flex justify-center items-center">
            <img width={200} src="../images/firebase.png" alt="Firebase" />
          </li>
          <li className="splide__slide flex justify-center items-center">
            <img width={80} src="../images/azure.png" alt="Azure" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AutoSlider;
