import React from "react";
import Header from "../../components/header/Header";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { contactPageData } from "../../portfolio.js";
import { projects,Competetionss} from "../../portfolio.js";
import "./Projects.css";
import { style } from "glamor";

function Projects(props) {
  const theme = props.theme;

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
          </div>
        </Fade>
      </div>
      <h1>Projects</h1>
      <div className="repo-cards-div-main">
        {projects.data.map((repo) => {
          return <ProjectCard repo={repo} theme={theme} />;
        })}
      </div>
      <br>
      </br>
      <h1>Competetions</h1>
      <div className="repo-cards-div-main">
           {Competetionss.data.map((repo) => {
            return <ProjectCard repo={repo} theme={theme} />;
        })}
</div>
    </div>
  );
}

export default Projects;
