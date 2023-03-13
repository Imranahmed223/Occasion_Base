import React from "react";
import "./ViewPageOutlet.scss";
import Container from "../../container/Container";
import Grid from "../../grid/Grid";

const ViewPageOutlet = (props) => {
  return (
    <>
      <div className="viewpage">
        <div className={`viewpage-hero ${props.className}`}>
          <div>
            <Container className="half">
              <div className="center viewpage-hero-content ">
                <h1 className="uppercase">{props.title}</h1>
                <p>{props.summery}</p>
              </div>
            </Container>
          </div>
        </div>
        <div className="m-6">
          <Container className="lg">
            <Grid className="grid-4">{props.children}</Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ViewPageOutlet;
