import React from "react";
import { Link } from "react-router-dom";

import "./Article.css";
import { Enc } from "../../hoc/enc";
import { Aux } from "../../hoc/_aux";
import { SectionHeadline } from "../../Text/SectionHeadline";
import { NewsPreview } from "../../NewsPreview";

const Article = () => {
  const ArticleImage = "http://via.placeholder.com/1920x1080";
  const articlesID = 1;
  return (
    <Enc>
      <div
        className="ArticleHeader"
        style={{ backgroundImage: `url(${ArticleImage})` }}
      >
        <SectionHeadline headline="Die neue Webseite kommt">
          hier entsteht der neue webauftritt von ucs
        </SectionHeadline>
      </div>
      <Aux isContentContainer>
        <p className="AuthorName">Auhtor: Elisabeth Lopez</p>
        <p className="Created">05. Mai 2019</p>
      </Aux>
      <SectionHeadline headline="Die neue Webseite kommt" />
      <Aux isContentContainer>
        <p className="ArticleText">
          Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen, extern sowie
          Intern teil. Ausserdem teilen wir gerne Trainingseinheiten,
          Wettkaempfe, Veranstalltungen und viele weitere spannende Dinge rund
          um und ueber den United Cheer Sports Verein in Dortmund.Wir nehmen
          regelmaessig an Wettkaempfen, Vorstellungen, extern sowie Intern teil.
          Ausserdem teilen wir gerne Trainingseinheiten, Wettkaempfe,
          Veranstalltungen und viele weitere spannende Dinge rund um und ueber
          den United Cheer Sports Verein in Dortmund.Wir nehmen regelmaessig an
          Wettkaempfen, Vorstellungen, extern sowie Intern teil. Ausserdem
          teilen wir gerne Trainingseinheiten, Wettkaempfe, Veranstalltungen und
          viele weitere spannende Dinge rund um und ueber den United Cheer
          Sports Verein in Dortmund.Wir nehmen regelmaessig an Wettkaempfen,
          Vorstellungen, extern sowie Intern teil. Ausserdem teilen wir gerne
          Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere
          spannende Dinge rund um und ueber den United Cheer Sports Verein in
          Dortmund.Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen,
          extern sowie Intern teil. Ausserdem teilen wir gerne
          Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere
          spannende Dinge rund um und ueber den United Cheer Sports Verein in
          Dortmund.Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen,
          extern sowie Intern teil. Ausserdem teilen wir gerne
          Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere
          spannende Dinge rund um und ueber den United Cheer Sports Verein in
          Dortmund.Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen,
          extern sowie Intern teil. Ausserdem teilen wir gerne
          Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere
          spannende Dinge rund um und ueber den United Cheer Sports Verein in
          Dortmund.Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen,
          extern sowie Intern teil. Ausserdem teilen wir gerne
          Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere
          spannende Dinge rund um und ueber den United Cheer Sports Verein in
          Dortmund.
        </p>
        <div className="ImpressionContainer">
          <img src={ArticleImage} alt="Alternative Text" />
          <img src={ArticleImage} alt="Alternative Text" />
          <img src={ArticleImage} alt="Alternative Text" />
        </div>
        <SectionHeadline headline="Weitere News von UCS" />
        <div className="ArticleNewsInnerContainer">
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
      </Aux>
    </Enc>
  );
};

export { Article };
