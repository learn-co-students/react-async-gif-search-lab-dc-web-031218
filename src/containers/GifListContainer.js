import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends React.Component {
  //  responsible for fetching the data from the giphy api, storing the first 3 gifs from the response in it's component state, and passing that data down to it's child the <GifList> component as a prop.
  // It will also render a <GifSearch /> component that renders the form. <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.

  // http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      topThreeGifs: []
    };
  }

  searchInputHandler = e => {
    // e.persist();
    this.setState({ searchTerm: e.target.value });
    // if (e.key === "Enter") {
    //   this.searchClickHandler(e);
    // }
  };

  searchClickHandler = e => {
    let searchUrl = `http://api.giphy.com/v1/gifs/search?q=${
      this.state.searchTerm
    }&api_key=dc6zaTOxFJmzC&rating=g`;

    fetch(searchUrl)
      .then(response => response.json())
      .then(json => {
        let firstThree = json.data.slice(0, 3);
        this.setState({ topThreeGifs: firstThree });
      });
  };

  render() {
    return (
      <div>
        <GifSearch
          searchClickHandler={this.searchClickHandler}
          searchInputHandler={this.searchInputHandler}
          searchTerm={this.state.searchTerm}
        />
        <GifList gifs={this.state.topThreeGifs} />
      </div>
    );
  }
}

export default GifListContainer;
