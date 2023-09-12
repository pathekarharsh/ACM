import React from "react";
import "./Possibility.css";
import People from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="possibility section__padding">
      <div className="possiblity-image">
        <img src={People} alt="image-app" />
      </div>
      <div className="possibility-heading">
        <h1 className="gradient__text">
          Explore the uncharted horizons of possibilities.
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
