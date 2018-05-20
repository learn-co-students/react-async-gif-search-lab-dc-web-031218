import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";

class GifListContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    };
  }

  fetchGifs = e => {
    e.preventDefault();
    fetch(
      `http://api.giphy.com/v1/gifs/search?q=${
        e.target.children[0].value
      }&api_key=dc6zaTOxFJmzC&rating=g`
    )
      .then(res => res.json())
      .then(json => {
        this.setGifs(json.data);
      });
  };

  setGifs = json => {
    this.setState({
      gifs: [json[0], json[1], json[2]]
    });
  };

  render() {
    return (
      <div>
        <GifSearch fetchGifs={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
