import React from "react";
import "./Cta.css";

const Cta = () => {
  return (
    <div className="cta section__margin">
      <div className="cta-heading">
        <p>Register for Infotrek to Get Started</p>
        <h1>Join today & start exploring the events of Infotrek24.</h1>
      </div>
      <div className="cta-button">
        <button><a href="https://infotrek24.tech/events">See Events</a></button>
      </div>
    </div>
  );
};

export default Cta;
