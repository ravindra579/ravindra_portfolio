import React from "react";
import Header from "../../components/header/Header";
import Educations from "../../containers/education/Educations";
import { contactPageData } from "../../portfolio.js";
import Certifications from "../../containers/certifications/Certifications";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
          </div>
        </Fade>
        <Educations theme={props.theme} />
        <Certifications theme={props.theme} />
      </div>
    </div>
  );
}

export default Education;
