import React from "react";

import "./News.css";

import { SectionHeadline } from "../../Text/SectionHeadline";
import { NewsPreview } from "../../NewsPreview";
import { PrimaryButton } from "../../Buttons/PrimaryButton";
import { Link } from "react-router-dom";

class News extends React.Component {
  state = {
    latestNews: []
  };
  render() {
    const articlesID = 1;
    return (
      <div className="HomeNewsContainer ContentContainer">
        <SectionHeadline headline="Neues von UCS">
          Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen, extern sowie
          Intern teil. Ausserdem teilen wir gerne Trainingseinheiten,
          Wettkaempfe, Veranstalltungen und viele weitere spannende Dinge rund
          um und ueber den United Cheer Sports Verein in Dortmund.
        </SectionHeadline>

        <div className="HomeNewsInnerContainer">
          <Link to={"/article/" + articlesID} className="NewsPreviewContainer">
            <NewsPreview
              headline="Silver Spirit Dancer"
              imgurl="http://via.placeholder.com/300x300"
            >
              Unsere Dancer waren sehr erfolgreich bei der deutschen
              Meisterschaft
            </NewsPreview>
          </Link>
          <Link to={"/article/" + articlesID} className="NewsPreviewContainer">
            <NewsPreview
              headline="Silver Spirit Dancer"
              imgurl="http://via.placeholder.com/300x300"
            >
              Unsere Dancer waren sehr erfolgreich bei der deutschen
              Meisterschaft
            </NewsPreview>
          </Link>
          <Link to={"/article/" + articlesID} className="NewsPreviewContainer">
            <NewsPreview
              headline="Silver Spirit Dancer"
              imgurl="http://via.placeholder.com/300x300"
            >
              Unsere Dancer waren sehr erfolgreich bei der deutschen
              Meisterschaft
            </NewsPreview>
          </Link>
        </div>

        <div className="HomeNewsPrimaryButtonContainer">
          <PrimaryButton text="Zur Newsübersicht" to="news" />
        </div>
      </div>
    );
  }
}

export { News };
