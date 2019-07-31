import React ,{ Component} from "react";
import PropTypes from 'prop-types';
import WebsiteArticlePhotocard from "./WebsiteArticlePhotocard"
import _ from "lodash"




class ArticleFlexBox extends Component {

  constructor(props){
    super(props);

    // active
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

    )
  }
}


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
