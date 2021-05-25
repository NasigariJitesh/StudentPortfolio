import React from "react";
import "./AchievementCard.css";
export default function AchivementCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="certificate-card">
      {cardInfo.image ? (
        <div className="certificate-image-div">
          <img
            src={require(`../../assests/images/${cardInfo.image}`)}
            alt={cardInfo.title}
            className="card-image"
          />
        </div>
      ) : null}
      <div className="certificate-detail-div">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">{cardInfo.description}</p>
        <div className="certificate-card-footer">
          {cardInfo.footer.map((link, i) => {
            return (
              <span
                key={i}
                className="certificate-tag"
                onClick={() => openUrlInNewTab(link.url)}
              >
                {link.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
