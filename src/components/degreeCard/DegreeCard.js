import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";
import { style } from "glamor";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;


  const card_body = style({
    borderBottom: `4px solid ${degree.color_code}`,
    borderLeft: `2px solid ${degree.color_code}`,
    borderRight: `2px solid ${degree.color_code}`,
    borderRadius: "7px",
    width: "95%",
    margin: "10px",
    boxShadow: `0px 1px 5px ${degree.color_code}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "rgba(255, 255, 255, 1)",
      boxShadow: `0 5px 15px ${degree.color_code}`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });
  return (
    <div className="degree-card">
      
      <Fade right duration={2000} distance="40px">
        <div {...card_body}>
          <div
            className="body-header"
            style={{ backgroundColor: degree.color_code }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>
          <div classname="body-content">
            {degree.descriptions.map((sentence) => {
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

export default DegreeCard;
