import React from "react";
import "./ViewVender.scss";
import { Card } from "../../../components";
import { cardImage } from "../../../assests";
import { ViewPageOutlet } from "../../../components/common";

const ViewPage = () => {
  return (
    <>
      <div className="viewpage">
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
        </ViewPageOutlet>
      </div>
    </>
  );
};

export default ViewPage;
