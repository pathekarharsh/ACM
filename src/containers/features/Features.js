import React from "react";
import "./Features.css";
import Feature from "../../components/feature/Feature";

const featuresData = [
  {
    title: "Enhancing Trust Through AI",
    text: "Experience a paradigm shift in trust-building with AI-driven solutions. Our technology fosters reliability and transparency, revolutionizing how we interact and connect.",
  },
  {
    title: "Empowerment in Active Engagement",
    text: "Empower yourself through immersive interactions. Uncover the potential of dynamic engagement, as AI becomes your ally in shaping meaningful experiences.",
  },
  {
    title: "Unlocking Possibilities with Smart Communication",
    text: "Witness the future of communication unfold. Seamlessly connect ideas and people with AI-powered communication tools that transcend barriers and redefine connectivity.",
  },
  {
    title: "Revolutionizing Legal Insights with AI",
    text: "Navigate the complexities of law and gain unprecedented insights. Our AI-driven legal solutions redefine conventional approaches, empowering informed decisions.",
  },
];
const Features = () => {
  return (
    <div className="features section__padding" id="features">
      <div className="features-heading">
        <h1 className="gradient__text">
          The future beckons, respond today and craft your extraordinary journey
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
