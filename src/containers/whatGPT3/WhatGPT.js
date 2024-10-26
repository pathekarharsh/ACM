import React from "react";
import "./WhatGpt.css";

const WhatGPT = () => (
  <div className="gpt section__margin" id="about">
    <div className="gpt-feature">
      <h1>What is Infotrek?</h1>
      <p>Infotrek, hosted by the ACM Club at NIT Trichy, is an Inter-Departmental Technical Symposium uniting brilliant minds for a blend of Technical and Non-technical events. From coding and hacking challenges to fun-filled quizzes and treasure hunts, Infotrek offers a vibrant platform for skill display, competition, and rewards.</p>
    </div>
    <div className="gpt-heading">
      <h1 className="gradient__text">A Spectrum of Challenges and Fun</h1>
      <p><a href="https://backend.infotrek24.tech/public/pdfs/rulebook.pdf" target="_blank">Discover the Events</a></p>
    </div>
    <div className="gpt-container">
      <div className="container-feature">
        <h3>Technical Events</h3>
        <p className="feature-text">Showcase your skills in coding, debugging, web design, and more. Compete and learn with peers from various departments.</p>
      </div>
      <div className="container-feature">
        <h3>Non-Technical Events</h3>
        <p className="feature-text">From Dumb Charades to Treasure Hunts, Infotrek offers interactive activities to test creativity, teamwork, and strategy.</p>
      </div>
      <div className="container-feature">
        <h3>The Star of the Event</h3>
        <p className="feature-text">A closing celebration recognizes the best performers across all events, creating unforgettable memories and rewarding excellence.</p>
      </div>
    </div>
  </div>
);

export default WhatGPT;
