import React from "react";
import "./ExperienceAccordion.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import { experience  } from "../../portfolio";
import { Volunteer  } from "../../portfolio";
import { Fade } from "react-reveal";

function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={1000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Internships
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {experience.experiences.map((exp) => {
          return <ExperienceCard exp={exp} theme={theme} />;
        })}
      </div>

      <div className="educations-header-div">
  <Fade bottom duration={1000} distance="20px">
    <h1 className="educations-header" style={{ color: theme.text }}>
      Volunteer
    </h1>
  </Fade>
</div>
<div className="educations-body-div">
  {Volunteer.Volunteers.map((exp) => {
    return <ExperienceCard exp={exp} theme={theme} />;
  })}
</div>
    </div>
    


  );
}
export default ExperienceAccordion;
