import React from "react";
import { FaGithubSquare, FaMailBulk } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-slate-400 text-neutral-content items-center p-4 dark:bg-zinc-600 dark:text-white">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - By Qurrota Ayun</p>
          <p className="flex items-center gap-2"></p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="mailto:kuriayun@gmail.com">
            <FaMailBulk size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/qurrota-ayun-a45a48256/"
            aria-label="LinkedIn"
            target="_blank"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="https://github.com/Qurroayun"
            aria-label="GitHub"
            target="_blank"
          >
            <FaGithubSquare size={26} />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
