import React from "react";
import "./HomePage.scss";
import { Button, Container, Heading, Text } from "../../../components";
const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <div className="homepage-container">
          <h3>Hero Section remaining</h3>
        </div>

        <div className="">
          <h1>slider </h1>
          <Button className="center rounded uppercase">view all</Button>
        </div>
        <Container className="md">
          <Heading className="primary uppercase">
            What’s your party occasion?
          </Heading>
          <Text>
            Whether you are planning a wedding, birthday party, corporate event,
            or any other type of gathering, occasion base provides an easy and
            convenient way to find and book the services you need. Just choose
            the occasion.
          </Text>
        </Container>
        <div className="">
          <h1>slider </h1>
          <Button className="center rounded uppercase">view all</Button>
        </div>
        <Container className="md">
          <Heading className="primary uppercase">Services and products</Heading>
          <Text>
            Let us help you create an unforgettable experience for your loved
            ones with our wide range of services and products. Click below to
            see what's available.
          </Text>
        </Container>

        <div>
          <h1>event services in remaining</h1>
        </div>

        <div className="">
          <Heading className="primary center uppercase">
            find how we work
          </Heading>
          <h1>video in remaining </h1>
        </div>

        <div className="work">
          <Heading className="primary center uppercase">how it works</Heading>
        </div>
      </div>
    </>
  );
};

export default HomePage;
