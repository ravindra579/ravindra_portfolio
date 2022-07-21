import React from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;
  const imageclick = props.imageclick;
  const styles = style({
    boxShadow: `0px 2px 5px ${certificate.color_code}`,
    border: `1px solid ${certificate.color_code}`,
    ":hover": {
      boxShadow: `0 5px 15px ${certificate.color_code}`,
    },
  });

  if (imageclick == false) {
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card" {...styles}>
          <div className="content">
            <div className="content-overlay"></div>
            <div
              className="cert-header"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="logo_img"
                src={require(`../../assests/images/${certificate.certificate_link}`)}
              />
            </div>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3 className="cert-body-subtitle" style={{ color: theme.text }}>
              {certificate.subtitle}
            </h3>
            <h3 className="cert-body-subtitle" style={{ color: theme.text }}>
              {certificate.subtitle1}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
