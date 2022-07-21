import React from "react";

import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import Imag from "../components/images/images";
export default function Main(propss) {
  return (
    <div>
      <HashRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/home"
            render={(props) => (
              <Home
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/experience"
            render={(props) => (
              <Experience
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/education"
            render={(props) => (
              <Education
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/projects"
            render={(props) => (
              <Projects
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
          <Route
            exact
            path="/images"
            render={(props) => (
              <Imag
                {...props}
                theme={propss.theme}
                setTheme={propss.setTheme}
              />
            )}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}
