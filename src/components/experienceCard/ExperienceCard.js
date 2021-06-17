import React from "react";
import "./ExperienceCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";

function ExperienceCard(props) {
  const exp = props.exp;
  const theme = props.theme;


  const card_body = style({
    borderBottom: `4px solid ${exp.color_code}`,
    borderLeft: `2px solid ${exp.color_code}`,
    borderRight: `2px solid ${exp.color_code}`,
    borderRadius: "7px",
    width: "90%",
    margin: "10px",
    boxShadow: `0px 1px 5px ${exp.color_code}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${exp.color_code}`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });


  return (
    <div className="exp-card">
      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div
            className="body-header"
            style={{ backgroundColor: exp.color_code }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {exp.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {exp.company}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {exp.duration}
              </h3>
            </div>
          </div>
          <div classname="body-content">
            {exp.description.map((sentence) => {
              return (
                <p className="content-list" style={{ color: theme.text }}>
                  {sentence}
                </p>
              );
            })}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default ExperienceCard;
