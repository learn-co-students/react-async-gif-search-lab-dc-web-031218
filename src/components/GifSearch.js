import React from "react";

const GifSearch = props => {
  return (
    <div>
      <form onSubmit={props.fetchGifs} id="gifSearchForm">
        <input type="text" placeholder="Search Gifs" />
        <input type="submit" value="Find Gifs" />
      </form>
    </div>
  );
};

export default GifSearch;
