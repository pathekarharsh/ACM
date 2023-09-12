import React from "react";
import "./Blog.css";
import Article from "../../components/article/Article";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";

const Blog = () => {
  return (
    <div className="blog section__padding" id="blog">
      <div className="blog-heading">
        <h1 className="gradient__text">
          Much unfolds, our blog captures the unfolding events.
        </h1>
      </div>
      <div className="blog-articles">
        <div className="article-grp1">
          <Article
            imgURL={blog01}
            date="Aug 14, 2022"
            desc="The Rise of GPT-3 and OpenAI: Pioneering a New Era of Transformation"
          />
        </div>
        <div className="article-grp2">
          <Article
            imgURL={blog02}
            date="Aug 12, 2022"
            desc="How OpenAI is Empowering Positive Change Worldwide"
          />
          <Article
            imgURL={blog03}
            date="Mar 18, 2022"
            desc="AI and Business: How OpenAI is Reshaping Corporate Strategies"
          />
          <Article
            imgURL={blog04}
            date="Apr 07, 2022"
            desc="OpenAI's Brainchild: GPT-3's Evolution and Implications"
          />
          <Article
            imgURL={blog05}
            date="Sep 03, 2022"
            desc="OpenAI's Contribution to Aesthetics and Cultural Expression"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
