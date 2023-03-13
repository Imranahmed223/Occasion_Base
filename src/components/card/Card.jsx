import React from "react";
import "./Card.scss";
import { MdLocationPin } from "react-icons/md";
import { BsEye } from "react-icons/bs";
const card = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-container">
          <div className="card-container-image">
            <img src={props.image} alt="card-image" />
          </div>
          <div className="card-container-data">
            <div className="card-container-data-location align-item-center">
              <MdLocationPin style={{ fontSize: "1.7rem" }} />
              <p>{props.location}</p>
            </div>
            <div className="card-container-data-name align-item-center">
              <h3>{props.name}</h3>
            </div>
            <p>{props.description}</p>
            <div className="card-container-data-views align-item-center">
              <BsEye />
              <p>{props.views} views</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
