import React from "react";
import "./AboutUsPage.scss";
import { aboutfirst, aboutsecond } from "../../../assests";
import { Container, Heading, Text } from "../../../components";

const AboutUsPage = () => {
  return (
    <>
      <div className="aboutus">
        <Container className="md">
          <div className="aboutus-content">
            <Heading>What We Do</Heading>
            <Text>
              OccasionBase is an online directory and the base of operations for
              all occasions. Are you planning a wedding, a birthday party, or a
              corporate event and feeling overwhelmed by the amount of work that
              needs to be done? Look no further than OccasionBase, the one-stop
              platform for all your event-planning needs.
            </Text>
            <img src={aboutfirst} alt="hero" />
            <Text>
              OccasionBase is an online marketing platform that allows vendors
              to advertise their services and products on the occasionbase.com
              website. The website is designed to help customers organize events
              for all occasions, from weddings to birthday parties, corporate
              events to family reunions.
            </Text>
            <Text>
              With OccasionBase, customers can easily find vendors for every
              aspect of their event, including catering, entertainment,
              decorations, photography, and more. The platform is user-friendly,
              making it easy to search for vendors, read reviews, and compare
              prices. You can also get in touch with vendors directly through
              the platform, saving you time and hassle.
            </Text>
            <Text>
              One of the best things about OccasionBase is that it is constantly
              updated with new vendors and services. This means that customers
              can always find the latest and best options for their event, no
              matter what they are looking for. The platform is also regularly
              maintained and updated to ensure a seamless experience for all
              users.
            </Text>
            <Text>
              OccasionBase is also designed to be a community where customers
              can connect with each other and share their experiences. This can
              be especially helpful for those planning events for the first
              time, as they can learn from others who have gone through the
              process before.
            </Text>
            <Text>
              In short, OccasionBase is the perfect online directory for anyone
              looking to plan an event. With its extensive vendor directory,
              helpful resources, and community, it is the base of operations for
              all occasions. So why not give it a try and see how it can help
              make your event planning a breeze?"
            </Text>
            <img src={aboutsecond} alt="second hero " />
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUsPage;
