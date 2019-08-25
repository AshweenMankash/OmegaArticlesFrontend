import React ,{ Component} from "react";

import _ from "lodash"
// import our custom components
import ArticleFlexBox from "../ArticleFlexBox"
import SearchBox from "../SearchBar"
import LoadingSpinner from "../LoadingSpinner3.js"
// our dummy site data
import dummyData from "../../static/dummyIndexData.js"



/*
The index page has trending articles tailored towards
the user with a default list as well as search functionality
along with it as well.


*/
class IndexPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: false,
      searchResults: null,
    };
    this.searchComplete = this.searchComplete.bind(this);
    return;
  }


  searchComplete(results){
    this.setState({
      isLoading: false,
      searchResults: results
    })
  }

  makeSearch(){
    var self = this;
    this.setState({
      isLoading: true
    });
    fetch(`${process.env.REACT_APP_INDEXPAGE_SEARCHURL}`)
    .then(response => response.json())
    .then(json => {
      self.searchComplete(json);
      })
  }

  showResults(){
    if(this.state.searchResults){
      return _.map(this.state.searchResults, (article)=>{
        return(
          <p key={""+article.title+article.userId}>
          {article.title} || {article.userId}</p>)
      })
    }
    else{
      var data = []
        _.mapKeys(dummyData,(list, category)=>{
          data.push(<ArticleFlexBox title={category} list={list} />)
        return {}
      });
      return data;
    }
    // this encoding is for the dummy data at
    //https://jsonplaceholder.typicode.com/todos/

  }


  render(){
    return (
      <div>
        <div>
        Header banner
        </div>
        <SearchBox
          search={(val)=>{ this.makeSearch(val)} }/>
        <div>
          NavBar
        </div>
        <div>
          {!this.state.isLoading && this.showResults()}
            {this.state.isLoading && (<LoadingSpinner />)}

        </div>
      </div>
    )
  }
}

export default IndexPage;
