import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Accomplishment from "../pages/accomplishments/Accomplishment";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

export default class Main extends Component {
  render() {
    if (settings.isSplash) {
      return (
        <div>
          <HashRouter basename="/">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <Splash
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />
              <Route
                path="/home"
                render={(props) => (
                  <Home
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />
              <Route
                path="/experience"
                exact
                render={(props) => (
                  <Experience
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />
              <Route
                path="/accomplishments"
                exact
                render={(props) => (
                  <Accomplishment
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />
              <Route
                path="/education"
                render={(props) => (
                  <Education
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />

              <Route
                path="/contact"
                render={(props) => (
                  <Contact
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />
              <Route
                path="/splash"
                render={(props) => (
                  <Splash
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />
              <Route
                path="/projects"
                render={(props) => (
                  <Projects
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />
            </Switch>
          </HashRouter>
        </div>
      );
    } else {
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
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />
              <Route
                path="/home"
                render={(props) => (
                  <Home
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />
              <Route
                path="/experience"
                exact
                render={(props) => (
                  <Experience
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />
              <Route
                path="/accomplishments"
                exact
                render={(props) => (
                  <Accomplishment
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />
              <Route
                path="/education"
                render={(props) => (
                  <Education
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />

              <Route
                path="/contact"
                render={(props) => (
                  <Contact
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />
              {/* <Route
							path="/splash"
							render={(props) => (
								<Splash
									{...props}
									theme={this.props.theme}
								/>
							)}
						/> */}
              <Route
                path="/projects"
                render={(props) => (
                  <Projects
                    {...props}
                    getTheme={this.props.getTheme}
                    theme={this.props.theme}
                  />
                )}
              />
            </Switch>
          </HashRouter>
        </div>
      );
    }
  }
}
