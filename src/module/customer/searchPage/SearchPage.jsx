import React from "react";
import "./SearchPage.scss";
import { Card, Container, Grid } from "../../../components";

import { cardImage, cardImage1, cardImage2 } from "../../../assests";

const SearchPage = () => {
  return (
    <>
      <div className="searchpage m-4">
        <Container className="lg">
          <Grid className="grid-3">
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
              image={cardImage}
              location="London"
              name="Birthday Party"
              description="Beautiful VW Campervan Operating Cash Bar"
              views="25k"
            />{" "}
            <Card
              image={cardImage}
              location="London"
              name="Birthday Party"
              description="Beautiful VW Campervan Operating Cash Bar"
              views="25k"
            />{" "}
            <Card
              image={cardImage}
              location="London"
              name="Birthday Party"
              description="Beautiful VW Campervan Operating Cash Bar"
              views="25k"
            />{" "}
            <Card
              image={cardImage}
              location="London"
              name="Birthday Party"
              description="Beautiful VW Campervan Operating Cash Bar"
              views="25k"
            />{" "}
            <Card
              image={cardImage}
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
            />{" "}
            <Card
              image={cardImage}
              location="London"
              name="Birthday Party"
              description="Beautiful VW Campervan Operating Cash Bar"
              views="25k"
            />
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default SearchPage;
