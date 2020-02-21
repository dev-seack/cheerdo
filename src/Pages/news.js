// News Page

import React from "react";

import { Aux } from "../Components/hoc/_aux";

import { SectionHeadline } from "../Components/Text/SectionHeadline";
import { NewsPreview } from "../Components/NewsPreview";
import { ApointmentOverview } from "../Components/ApointmentOverview";
// import { PrimaryButton } from "../Components/Buttons/PrimaryButton";
import { Link } from "react-router-dom";

const NewsOverview = props => {
  const articlesID = 1;

  return (
    <Aux isContentContainer maxContainer>
      <SectionHeadline headline="Termine">
        <ApointmentOverview></ApointmentOverview>
      </SectionHeadline>
      {/* <SectionHeadline headline="Neues von UCS">
        Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen, extern sowie
        Intern teil. Ausserdem teilen wir gerne Trainingseinheiten, Wettkaempfe,
        Veranstalltungen und viele weitere spannende Dinge rund um und ueber den
        United Cheer Sports Verein in Dortmund.
      </SectionHeadline>
      <div className="HomeNewsInnerContainer">
        <Link to={"/article/" + articlesID} className="NewsPreviewContainer">
          <NewsPreview
            headline="News eins"
            imgurl="http://via.placeholder.com/300x300"
          >
            lorem ipsum dolor atem disem apem lorem datisam matissila obem
            haguda
          </NewsPreview>
        </Link>
      </div> */}
    </Aux>
  );
};

export { NewsOverview };
