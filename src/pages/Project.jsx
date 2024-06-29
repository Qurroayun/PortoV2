import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import Swal from "sweetalert2";

const Project = () => {
  const initialProjectsToShow = 4;
  const [projectsToShow, setProjectsToShow] = useState(initialProjectsToShow);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "INA Vertex",
      description:
        "Mendix Low-Code \n\n Develop Responsive Layout/Slicing \n Develop Integration Entra Id And Sharepoint \n Develop Generate Excel and PDF \n\n Develop Micrlofows For Logic Functional \n Develop Domain Model (Database) \n Azure \n Agile/Scrum",
      indcatorTitle: "Full-Stack",
      image: "../images/ina.png",
      githubLink: "",
    },
    {
      id: 2,
      title: "Netflix Clone",
      description:
        "Javascript, ES6 \n React Vite \n Tailwind  \n Responsive \n Free API films \n\n Home page \n Login page \n Select user page \n main page \n detail per-film page",
      indcatorTitle: "Front-End",
      image: "../images/ssnetchil.png",
      githubLink: "https://github.com/Qurroayun/FE-Netchill-React",
    },
    {
      id: 3,
      title: "Simple mini E-Commerce",
      description:
        "Front-end \n Javascript, ES6 \n React Vite, Tailwind, Responsive \n Main page \n Login page \n Product page \n Payment Page \n Search \n Cart \n User profile page \n Admin Dashboard \n\n Back-End \n NodeJs Ft Express \n Login Api \n Product Api \n Main Api \n Search Api \n Cart Api \n User Api \n Admin Api \n Logout Api \n Database Mysql \n\n Is not include Payment Gateway",
      indcatorTitle: "Full-Stack",
      image: "../images/ssecomer.png",
      githubLink: "",
    },
    {
      id: 4,
      title: "Monitoring Dashboard PT. Citracom",
      description:
        "Front-End \n HTML, CSS, JavaScript \n Login Page \n Dashboard main with Roles \n Chart Per-Dashboard main \n User Profile \n User Register Form Admin \n\n Back-End \n PHP \n Register Api \n Login Roles Api \n Dashboard Api \n User Api \n Database Mysql \n\n Framework Laravel 9  ",
      indcatorTitle: "Full-Stack",
      image: "../images/monitoring.png",
      githubLink: "",
    },
  ];

  const indicatorColors = [
    "bg-blue-400",
    "bg-red-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-indigo-400",
    "bg-pink-400",
    "bg-gray-400",
    "bg-emerald-400",
    "bg-sky-400",
    "bg-fuchsia-400",
    "bg-rose-400",
  ];

  const cardColors = [
    "bg-blue-400",
    "bg-red-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-purple-400",
    "bg-indigo-400",
    "bg-pink-400",
    "bg-gray-400",
    "bg-emerald-400",
    "bg-sky-400",
    "bg-fuchsia-400",
    "bg-rose-400",
  ];

  const getrandomColor = () => {
    const randomColors = Math.floor(Math.random() * indicatorColors.length);
    return indicatorColors[randomColors];
  };

  const getrandomColorCard = () => {
    const colorRandom = Math.floor(Math.random() * cardColors.length);
    return cardColors[colorRandom];
  };

  const handleLoadMore = () => {
    setProjectsToShow(projectsToShow + 4);
  };

  const githubClickHandel = (link) => {
    if (!link) {
      Swal.fire({
        icon: "error",
        title: "Sorry",
        text: "Source code is private, please contact developers",
      });
    } else {
      if (!link.startsWith("http://") && !link.startsWith("https://")) {
        link = "https://" + link;
      }
      window.open(link, "_blank");
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="project">
      <div className="container mx-auto xl:mt-48 w-full min-h-screen">
        <div className="flex justify-end">
          <div className="badge bg-cyan-400 w-48 h-10 text-xl indicator-project">
            Projects
          </div>
        </div>
        <div className="grid grid-cols-1 mt-20 md:grid-cols-2 xl:grid-cols-4 gap-5 place-items-center text-white ">
          {projects.slice(0, projectsToShow).map((project) => (
            <div
              key={project.id}
              className="indicator"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <span
                className={`indicator-item badge text-white rotated-indicator ${getrandomColor()}`}
              >
                {project.indcatorTitle}
              </span>
              <div className="grid w-96 xl:w-80 place-items-center">
                <div
                  className={`card w-96 xl:w-80  shadow-xl ${getrandomColorCard()}`}
                >
                  <div className="card-body flex flex-col justify-between">
                    <div className="flex self-end justify-self-end gap-3">
                      <button
                        className="btn bg-teal-400 w-24 text-white"
                        onClick={() => openModal(project)}
                      >
                        Details
                      </button>

                      <button
                        className="btn bg-lime-400 w-22 "
                        onClick={() => githubClickHandel(project.githubLink)}
                      >
                        <FaGithubSquare size={36} />
                      </button>
                    </div>
                    <p className="text-center font-bold">{project.title}</p>
                  </div>
                  <figure className="p-2">
                    <img
                      className="rounded-xl object-cover h-40 w-full"
                      src={project.image}
                      alt={project.title}
                    />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="text-lg font-bold">{selectedProject.title}</h3>
              <p className="py-4 whitespace-pre-line">
                {selectedProject.description}
              </p>
              <div className="flex justify-end">
                <button className="btn btn-accent " onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
            <div className="modal-backdrop" onClick={closeModal}></div>
          </div>
        )}

        {projectsToShow < projects.length && (
          <div className="text-center mt-5">
            <button
              className="btn btn-accent"
              onClick={handleLoadMore}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
