import React from 'react'
import "./Brand.css"
import Google from "../../assets/google.png"
import Slack from "../../assets/slack.png"
import Atlassian from "../../assets/atlassian.png"
import Dropbox from "../../assets/dropbox.png"
import Shopify from "../../assets/shopify.png"

const Brand = () => {
  return (
    <div className="brand section__padding">
      <div>
        <img src={Google} alt="google-logo"/>
      </div>
      <div>
        <img src={Atlassian} alt="atlassian-logo"/>
      </div>
      <div>
        <img src={Slack} alt="slack-logo"/>
      </div>
      <div>
        <img src={Shopify} alt="shopify-logo"/>
      </div>
      <div>
        <img src={Dropbox} alt="dropbox-logo"/>
      </div>
    </div>
  )
}

export default Brand