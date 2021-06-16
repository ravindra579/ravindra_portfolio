import React from "react";
import Header from "../../components/header/Header";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { contactPageData } from "../../portfolio.js";
import { Fade } from "react-reveal";


function Experience(props) {
  const theme = props.theme;
  console.log(props.setTheme);
  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-experience">
        <Fade bottom duration={2000} distance="40px">
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
            <img className="profile" src={require(`../../assests/images/${contactPageData.contactSection["intern_image_path"]}`)} alt=""/>
            </div>
            </div>  
        </Fade>
      </div>
      <ExperienceAccordion theme={props.theme} />
      
    </div>
  );
}

export default Experience;
