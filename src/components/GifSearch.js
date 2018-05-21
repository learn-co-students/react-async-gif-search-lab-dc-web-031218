import React from "react";

const GifSearch = props => {
  return (
    <div>
      <input onChange={props.searchInputHandler} value={props.searchTerm} />
      <button onClick={props.searchClickHandler}>Search</button>
    </div>
  );
};

export default GifSearch;
