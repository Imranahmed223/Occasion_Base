import React from "react";
import "./Faq.scss";
import { Container, Heading, Text } from "../../../components";

const Faq = () => {
  return (
    <>
      <div className="faq">
        <h2>hero Section Remaining</h2>

        <div className="m-6">
          <Container className="md">
            <Question>
              What types of events can be organized through your online event
              marketplace?
            </Question>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </Text>
            <Question>
              What types of events can be organized through your online event
              marketplace?
            </Question>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </Text>
            <Question>
              What types of events can be organized through your online event
              marketplace?
            </Question>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </Text>
            <Question>
              What types of events can be organized through your online event
              marketplace?
            </Question>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </Text>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Faq;

// Sub Compoents

const Question = (props) => {
  return (
    <>
      <div className="question m-3">
        <Heading>Q. </Heading>
        <Heading>{props.children}</Heading>
      </div>
    </>
  );
};
