import React, { useState, useEffect } from "react";
import DarkMode from "./DarkMode.jsx";
import "../index.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavbarClass = () => {
    if (scrollPosition > 20) {
      return "navbar scrolled";
    } else {
      return "navbar";
    }
  };

  return (
    <>
      <div
        className={`${getNavbarClass()} sticky  mx-auto  shadow-2xl mt-3 top-0 left-0 right-0 z-10`}
      >
        <div className="navbar-start">
          <div className="dropdown mt-5">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 p-2 shadow font-semibold text-xl"
            >
              <li>
                <Link
                  to="home"
                  spy={false}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  spy={false}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="project"
                  spy={false}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  spy={false}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Experience
                </Link>
              </li>
            </ul>
          </div>
          <a href="/" className="ml-5 text-xl font-semibold">
            Qurrota Ayun
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link
                to="home"
                spy={false}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="skills"
                spy={false}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="project"
                spy={false}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                spy={false}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end xl:mr-5">
          <DarkMode toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
