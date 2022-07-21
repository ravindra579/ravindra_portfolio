import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import { style } from "glamor";
import { contactPageData } from "../../portfolio";
const ContactData = contactPageData.contactSection;
export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div className="greeting-image-div">
            <div
              className="contact-heading-img-div"
              style={{ marginLeft: "50px" }}
            >
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
                width="50%"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="greeting-text" style={{ color: theme.text }}>
            {greeting.title}
          </h1>
          <p className="greeting-text-p" style={{ color: theme.text }}>
            <span>I'm </span>
            <span>{greeting.full_name}. </span>
            {greeting.subTitle}
          </p>
          <SocialMedia />
          <div className="portfolio-repo-btn-div">
            <a href={greeting.resumeLink}>
              <button {...styles} className="button">
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
}
