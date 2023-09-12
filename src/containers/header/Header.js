import React from "react";
import "./Header.css";
import People from "../../assets/people.png";
import AI from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">
          Discover Your Creative Spark with OpenAI
        </h1>
        <p>
          Dive into the playground of possibilities with OpenAI, where curiosity
          and invention flourish. Our tools empower you to paint your ideas onto
          the canvas of the digital world, crafting unique experiences that
          captivate and inspire.
        </p>
        <div className="header-content-input">
          <input type="email" placeholder="Enter your email" />
          <button type="button">Get Started</button>
        </div>
        <div className="header-content-people">
          <img src={People} alt="people-image" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header-image">
        <img src={AI} alt="header-AI-image" />
      </div>
    </div>
  );
};

export default Header;
