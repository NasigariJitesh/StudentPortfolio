import React, { Component } from "react";
import { Fade } from "react-bootstrap";
import { introduction } from "../../portfolio";
import "./Introduction.css";
import OntheOffice from "./OntheOffice";
class Introduction extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="40px">
        <div className="intro-main" id="introduction">
          <div className="introduction-main">
            <div className="introduction-image-div">
              <OntheOffice theme={theme} />
            </div>
            <div className="introduction-text-div">
              <div>
                <h1 className="introduction-text" style={{ color: theme.text }}>
                  {introduction.title}
                </h1>

                <p
                  className="introduction-text-p subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {introduction.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}
export default Introduction;
