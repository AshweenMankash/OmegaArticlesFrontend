import React from "react"
import LongPressSensor from "./LongPressSensor";

function WebsiteArticlePhotocard(props){
  var header = props.header;
  // if the user isnt interested in the photocard than
  if(!props.active){
    header = ""+props.header.slice(0,30)+"...";
  }

  return (
    <LongPressSensor article_url={props.article_url}>
      <article onClick={props.onClick} data-source={props.article_url} className="photocard">
      <img alt="Brought to you By: OmegaArticles" src={props.imgURL} />
        <p className="article-source">{props.site_host}</p>
        <p className="language">{props.lang}</p>
        <span className="header">
          <p>{header}</p>
        </span>
      </article>
    </LongPressSensor>)
}


export default WebsiteArticlePhotocard;
