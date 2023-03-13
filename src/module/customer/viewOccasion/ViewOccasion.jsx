import React from "react";
import "./ViewOccasion.scss";
import { Card } from "../../../components";
import { cardImage, cardImage1, cardImage2 } from "../../../assests";
import { ViewPageOutlet } from "../../../components/common";
const ViewOccasion = () => {
  return (
    <>
      <div className="viewoccasion">
        <ViewPageOutlet
          title="Pick a celebration"
          summery="Whether you're celebrating a special milestone or planning a momentous occasion, occasion base has got you covered! From birthdays and anniversaries to graduations and weddings, we offer services for all of life's big moments."
        >
          <Card
            image={cardImage}
            location="London"
            name="Birthday Party"
            description="Beautiful VW Campervan Operating Cash Bar"
            views="25k"
          />
          <Card
            image={cardImage1}
            location="London"
            name="Birthday Party"
            description="Beautiful VW Campervan Operating Cash Bar"
            views="25k"
          />
          <Card
            image={cardImage2}
            location="London"
            name="Birthday Party"
            description="Beautiful VW Campervan Operating Cash Bar"
            views="25k"
          />
          <Card
            image={cardImage}
            location="London"
            name="Birthday Party"
            description="Beautiful VW Campervan Operating Cash Bar"
            views="25k"
          />
          <Card
            image={cardImage1}
            location="London"
            name="Birthday Party"
            description="Beautiful VW Campervan Operating Cash Bar"
            views="25k"
          />
          <Card
            image={cardImage2}
            location="London"
            name="Birthday Party"
            description="Beautiful VW Campervan Operating Cash Bar"
            views="25k"
          />

          <Card
            image={cardImage}
            location="London"
            name="Birthday Party"
            description="Beautiful VW Campervan Operating Cash Bar"
            views="25k"
          />
          <Card
            image={cardImage1}
            location="London"
            name="Birthday Party"
            description="Beautiful VW Campervan Operating Cash Bar"
            views="25k"
          />
          <Card
            image={cardImage2}
            location="London"
            name="Birthday Party"
            description="Beautiful VW Campervan Operating Cash Bar"
            views="25k"
          />

          <Card
            image={cardImage}
            location="London"
            name="Birthday Party"
            description="Beautiful VW Campervan Operating Cash Bar"
            views="25k"
          />
          <Card
            image={cardImage1}
            location="London"
            name="Birthday Party"
            description="Beautiful VW Campervan Operating Cash Bar"
            views="25k"
          />
          <Card
            image={cardImage2}
            location="London"
            name="Birthday Party"
            description="Beautiful VW Campervan Operating Cash Bar"
            views="25k"
          />
        </ViewPageOutlet>
      </div>
    </>
  );
};

export default ViewOccasion;
