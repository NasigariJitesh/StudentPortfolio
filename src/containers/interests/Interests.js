import React from "react";
import "./Interests.css";
import Interestsection from "./InterestSection";
import { Fade } from "react-reveal";

export default function Interests(props) {
  const theme = props.theme;
  return (
    <div className="main" id="interests">
      <div className="interests-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="interests-header" style={{ color: theme.text }}>
            My Other Interests And Skills
          </h1>
        </Fade>
      </div>
      <Interestsection theme={theme} />
    </div>
  );
}
