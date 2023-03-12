import React from "react";
import "./Footer.scss";
import Container from "../../container/Container";
import { logo } from "../../../assests";
import Text from "../../text/Text";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container className="lg">
          <img src={logo} alt="logo" />
          <div className="footer-container">
            <div className="footer-container-left">
              <Text className="uppercase">
                Occasion Base UK Ltd. Company registration number 09309515.
              </Text>
              <Text className="upppercase">
                4.7 of 5 by 1223 reviews on Trustpilot
              </Text>
            </div>
            <div className="footer-container-right">
              <Link to="/aboutus">about us</Link>
              <Link to="/aboutus">sign as a vender</Link>
              <Link to="/aboutus">faq</Link>
              <Link to="/aboutus">git in touch</Link>
              <Link to="/aboutus">support</Link>
              <div className="">icon's are remaining</div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
