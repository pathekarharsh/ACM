import React from 'react'
import "./Article.css"

const Article = ({ imgURL, date, desc }) => {
  return (
    <div className='article'>
      <div className='article-img'>
        <img src={ imgURL} alt='article-image'/>
      </div>
      <div className='article-desc'>
        <div>
          <p>{date}</p>
          <h3>{desc}</h3>
        </div>
        <h4>Read Full Article</h4>
      </div>
    </div>
  )
}

export default Article;