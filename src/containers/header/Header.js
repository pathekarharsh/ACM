import React from "react";
import "./Header.css";
import mountain from "../../assets/mountain.svg";

const Header = () => {
  return (
    <div className="header section__padding" id="home">
      <div className="header-content">
        <h1 className="gradient__text">INFOTREK</h1>
        <h1 className="gradient__text">trekking the future</h1>
        <p>
          Join Info Trek for captivating tech events! Whether you love coding,
          design, or networking, we’ve got something exciting waiting for you.
        </p>
        <div className="header-content-input">
          <button className="events-button" type="button"><a href="https://infotrek24.tech/events">Events</a></button>
          <button className="rule-book-button" type="button"><a href="https://backend.infotrek24.tech/public/pdfs/rulebook.pdf">Rule Book</a></button>
        </div>
        <div className="header-content-people">
          <p>We are waiting for you!.</p>
        </div>
      </div>
      <div className="header-image">
        <img src={mountain} alt="header-AI-image" className="mountain" />
      </div>
    </div>
  );
};

export default Header;
