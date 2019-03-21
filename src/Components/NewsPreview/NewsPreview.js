import React from "react";
import "./NewsPreview.css";

const NewsPreview = (props) => {
  return (
    <div className="NewsPreviewContainer">
      <div className="NewsPreviewThumbnailContainer">
        <img
          src={props.imgurl}
          className="NewsPreviewThumbnail"
          alt="United Cheer Sports e.V. Dortmund, Cheerleader, Cheerdancer, Aktuelle Nachrichten"
        />
      </div>
      <h3 className="NewsPreviewHeadline">{props.headline}</h3>
      <p className="NewsPreviewText">{props.children}</p>
      <a className="NewsPreviewReadMore" href="/startseite">
        Mehr lesen
      </a>
    </div>
  );
};

export { NewsPreview };
