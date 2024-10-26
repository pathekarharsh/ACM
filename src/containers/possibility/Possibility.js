import React from "react";
import "./Possibility.css";
import Aditi from "../../assets/aditi.jpg";
import Sourab from "../../assets/saourab.jpg";
import Debanjan from "../../assets/debanjan.jpg";
import Nikhil from "../../assets/nikhil.jpg";
import Astik from "../../assets/astik.jpg";
import Satish from "../../assets/satish.jpg";
import Pratham from "../../assets/pratham.jpg";
import Rahul from "../../assets/rahul.jpg";
import Rishabh from "../../assets/rishabh.jpg";
import Abhi from "../../assets/abhi.jpg";
import Pawan from "../../assets/pawan.jpg";

const teamMembers = [
  { name: "Aditi", image: Aditi, role: "Office Bearer '26" },
  { name: "Sourab", image: Sourab, role: "Office Bearer '26" },
  { name: "Debanjan", image: Debanjan, role: "Office Bearer '26" },
  { name: "Nikhil", image: Nikhil, role: "Office Bearer '26" },
  { name: "Astik", image: Astik, role: "Office Bearer '26" },
  { name: "Satish", image: Satish, role: "Office Bearer '26" },
  { name: "Pratham", image: Pratham, role: "Office Bearer '26" },
  { name: "Rahul", image: Rahul, role: "Office Bearer '26" },
  { name: "Pawan", image: Pawan, role: "Chairperson" },
  { name: "Abhi", image: Abhi, role: "V. Chairperson" },
  { name: "Rishabh", image: Rishabh, role: "Treasurer" },
];

const Possibility = () => {
  return (
    <div className="possibility section__padding" id="team">
      <h1 className="gradient__text">Meet the Team</h1>
      <div className="possibility-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <div className="member-image">
              <img src={member.image} alt="member" />
            </div>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Possibility;
