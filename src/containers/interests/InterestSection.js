import React, { Component } from "react";
import "./Interests.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { interests } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import DesignImg from "./DesignImg";

function GetInterestsvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class InterestSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {interests.data.map((interest) => {
          return (
            <div className="interests-main-div">
              <div className="interests-text-div">
                <Fade left duration={1000}>
                  <h1
                    className="interests-heading"
                    style={{ color: theme.text }}
                  >
                    {interest.title}
                  </h1>
                </Fade>
                <Fade left duration={1500}>
                  <SoftwareSkill logos={interest.softwareSkills} />
                </Fade>
                <Fade left duration={2000}>
                  <div>
                    {interest.skills.map((interestsentence) => {
                      return (
                        <p
                          className="subTitle interests-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {interestsentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
              <Fade right duration={2000}>
                <div className="interests-image-div">
                  <GetInterestsvg fileName={interest.fileName} theme={theme} />
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    );
  }
}

export default InterestSection;
