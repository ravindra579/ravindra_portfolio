import React from "react";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo, theme }) {
  

  const styles = style({
    color: "white",
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 60px -30px",
    padding: "2rem",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.color} 0 2px 15px`,
    },
  });
   if(repo.id==="0"){
       if(repo.website_id==="1"){
  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          style={{ backgroundColor: theme.ProjectCard }}
        >
          <div className="repo-name-div">
            <div className="repo-name" style={{color: theme.text}}>
              {repo.name}
              </div>
              <div className="repo-description2">
<a href={repo.website}>[Website]</a>
</div>
<div className="repo-description1">
 <a href={repo.url}>[Code]</a>
 </div>
          </div>
          {repo.description.map((sentence) => {
          return (
          <p className="repo-description" style={{ color: "black" }}>
            {sentence}</p>);})};
          <p className="repo-description" style={{color:"black"}}>
              <b><u><h3>Technologies used:</h3></u></b>
          </p>
          <div className="repo-description">
          {repo.language.map((sentence) => {
        return (<i className="a" style={{ color: "black" }}>
          {sentence}</i>);})};
        </div>
        
        
        </div>
      </Fade>
    </div>
  );
          }else{
            return (
                <div>
                  <Fade bottom duration={2000} distance="40px">
                    <div
                      {...styles}
                      key={repo.id}
                      style={{ backgroundColor: theme.ProjectCard }}
                    >
                      <div className="repo-name-div">
                        <div className="repo-name" style={{color: "black"}}>
                          {repo.name}
                        </div>
                        <div className="repo-description1">
 <a href={repo.url}>[Code]</a>
 </div>
                      </div>
                      {repo.description.map((sentence) => {
                      return (
                      <p className="repo-description" style={{ color: "black" }}>
                        {sentence}</p>);})};
                      <p className="repo-description" style={{color:"black"}}>
                          <b><u><h3>Technologies used:</h3></u></b>
                      </p>
                      <div className="repo-description">
                      {repo.language.map((sentence) => {
                    return (<i className="a" style={{ color: "black" }}>
                      {sentence}</i>);})};
                     </div>
                    </div>
                  </Fade>
                </div>
              );
          }
}
else{
    return (
        <div>
          <Fade bottom duration={2000} distance="40px">
            <div
              {...styles}
              key={repo.id}
              style={{ backgroundColor: theme.ProjectCard }}
            >
              <div className="repo-name-div">
                <p className="repo-name" style={{color: "black"}}>
                  {repo.name}
                </p>
              </div>
              {repo.description.map((sentence) => {
              return (
              <p className="repo-description" style={{ color: "black" }}>
                {sentence}</p>);})};
              <p className="repo-description" style={{color:"black"}}>
                  <b><u><h3>Technologies used:</h3></u></b>
              </p>
              <div className="repo-description">
              {repo.language.map((sentence) => {
            return (<i className="a" style={{ color:"black" }}>
              {sentence}</i>);})};
              </div>
            </div>
          </Fade>
        </div>
      );
}
}
