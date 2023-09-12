import React from "react";
import Feature from "../../components/feature/Feature";
import "./WhatGpt.css";

const WhatGPT = () => (
  <div className="gpt section__margin" id="aboutgpt">
    <div className="gpt-feature">
      <Feature
        title="What is GPT ?"
        text="GPT (Generative Pre-trained Transformer) by OpenAI is an advanced AI model that comprehends and generates human-like text. It learns from extensive text data using a deep neural network, enabling tasks like text completion, translation, and summarization, making it a potent tool for natural language understanding and generation."
      />
    </div>
    <div className="gpt-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt-container">
      <Feature
        title="Chatbots"
        text="ChatGPT offers dynamic and natural conversations, making it an adept virtual conversational partner for diverse interactions It comprehends context, answers questions"
      />
      <Feature
        title="Knowledgebase"
        text="With a wealth of information up to September 2021, ChatGPT provides insightful and accurate responses across various subjects"
      />
      <Feature
        title="Education"
        text="ChatGPT acts as an interactive learning assistant, providing explanations, answering questions, and supporting learners in their educational pursuits"
      />
    </div>
  </div>
);

export default WhatGPT;
