import React ,{ Component} from "react";
import PropTypes from 'prop-types';
import WebsiteArticlePhotocard from "./WebsiteArticlePhotocard"
import _ from "lodash"

class ArticleFlexBox extends Component {
  constructor(props){
    super(props);

    // active variable is the last one
    //that was clicked
    this.state={
      active: null
    }
  }
  setActiveArcticle(index){
    this.setState({
      active: index
    })
  }
  render(){
    // we use the article_url to send the user tothat location
    // and the active is a boolean to show or hide entire text
    return(
      <section className="photocard-box">
      {_.map(this.props.list,(article,index)=>{
        var {
          programmingLanguage: lang,
          articleTitle: header,
          site_host,
          imgURL,
          article_url,
        } = article;
        return(
          <WebsiteArticlePhotocard
            key={article_url}
            lang={lang}
            imgURL={imgURL}
            site_host={site_host}
            header={header}
            onClick={()=>{this.setActiveArcticle(index)}}
            article_url={article_url}
            active={index===this.state.active}/>
        );
      })}
      </section>
    );
  }
}

/*
the Prop types are what is required for the array of objects to pass to the
article flex box, the rest are derived from the internal state.
*/
ArticleFlexBox.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    programmingLanguage: PropTypes.string,
    articleTitle: PropTypes.string,
    site_host: PropTypes.string,
    imgURL: PropTypes.string,
    article_url: PropTypes.string,
  })).isRequired
}


export default ArticleFlexBox;
