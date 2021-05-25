import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Built by{" "}
          {
            <a
              href="https://nasigarijitesh.me/"
              hoverStyle={{ fontWeight: "bold" }}
              style={{ color: props.theme.text }}
            >
              Nasigari Jitesh
            </a>
          }
        </p>
      </Fade>
    </div>
  );
}
