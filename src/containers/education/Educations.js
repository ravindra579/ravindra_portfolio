import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

function Educations(props) {

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={1000} distance="20px">
          <h1 className="educations-header" style={{ color: props.theme.text }}>
            Education 
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={props.theme} />;
        })}
      </div>
    </div>
  );
}

export default Educations;
