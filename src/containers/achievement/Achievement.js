import React from "react";
import "./Achievement.css";
import AchivementCard from "../../components/achievementCard/AchivementCard";
import { Achivements } from "../../portfolio";

export default function Achievement() {
  // function openUrlInNewTab(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }
  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <h1 className="achievement-heading">{Achivements.title}</h1>
        <h3 className="achievement-subtitle">{Achivements.subtitle}</h3>
        <div className="achievement-cards-div">
          {Achivements.achivements.map((achivement) => {
            return (
              <AchivementCard
                cardInfo={{
                  title: achivement.title,
                  description: achivement.subtitle,
                  image: achivement.image,
                  footer: achivement.footerLink,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
