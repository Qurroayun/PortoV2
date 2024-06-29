import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (
    <section id="home">
      <div className="hero mx-auto min-h-screen sm:mt-5 md:mt-5">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="../public/images/avatar.png"
            className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-2xl"
          />
          <div className="grid-cols-2">
            <h1 className="text-5xl font-bold">Qurrota Ayun</h1>
            <div className="mt-2 text-lg">
              <div className="badge badge-accent badge-outline">
                Software Engineer
              </div>
              <span style={{ margin: "0 8px" }}></span>
              <div className="badge badge-secondary badge-outline">
                Full Stack Developer
              </div>
            </div>
            <p>
              Saya adalah lulusan S1 Jurusan Teknik Infromatika Universitas
              Nusamandiri, Telah memahami secara baik mengenai pemrograman,
              pengembangan web dan mobile, pengembangan basis data. Saya
              merupakan seorang yang berintegritas tinggi, pribadi yang
              berorientasi pada pencapaian hasil yang unggul dan mampu
              berkontribusi dalam lingkungan yang inovatif, Saya telah memiliki
              pengalaman kerja/magang. Saya siap bekerja sesuai dengan prosedur
              perusahaan dan berikontribusi lebih secara konkret.
            </p>
            <ul className="flex gap-3 p-1 mt-5">
              <li>
                <a
                  href="https://github.com/Qurroayun"
                  className="Github"
                  target="_blank"
                >
                  <FaGithubSquare size={38} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/qurrota-ayun-a45a48256/"
                  className="Linked"
                  target="_blank"
                >
                  <FaLinkedin size={38} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
