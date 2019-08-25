import React from 'react'
import PropTypes from 'prop-types';



function SearchBar(props){
  var val = React.createRef();

  return(
    <div className="search-box">
      <div className="search-input">
        <input placeholder="Search this!" style={{display: "inline",width: "100%"}} ref={val} type="text" name="search-filters" />
        <button style={{marginLeft: "-50px"}} type="button"
        onClick={()=>{
          props.search(val.current.value);
        }}
        ><i class="fas fa-cloud"></i></button>
      </div>
    </div>
  )

}

/*
the url that the searchBar searche
*/
SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
}



export default SearchBar;
