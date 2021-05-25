import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Achievement from "../../containers/achievement/Achievement";
import StartupProject from "../../containers/StartupProjects/StartupProject";
import "./Accomplishment.css";
import { accomplishment } from "../../portfolio.js";
import { Fade } from "react-reveal";
import AccomplishmentImg from "./AccomplishmentImg";

class Accomplishment extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="accomplishment-main">
        <Header getTheme={this.props.getTheme} theme={theme} />
        <div className="basic-accomplishment">
          <Fade bottom duration={2000} distance="40px">
            <div className="accomplishment-heading-div">
              <div className="accomplishment-heading-text-div">
                <h1
                  className="accomplishment-heading-text"
                  style={{ color: theme.text }}
                >
                  {accomplishment.title}
                </h1>
                <h3
                  className="accomplishment-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {accomplishment["subtitle"]}
                </h3>
                <p
                  className="accomplishment-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {accomplishment["description"]}
                </p>
              </div>
              <div className="accomplishment-heading-img-div">
                {/* <img
									src={require(`../../assests/images/${accomplishment["header_image_path"]}`)}
									alt=""
								/> */}
                <AccomplishmentImg theme={theme} />
              </div>
            </div>
          </Fade>
        </div>

        <StartupProject theme={this.props.theme} />
        <Achievement theme={this.props.theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Accomplishment;
