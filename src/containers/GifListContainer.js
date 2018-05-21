import React from "react";
import GifSearch from "../components/GifSearch";
import GifList from "../components/GifList";
export default class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      threeGifs: []
    };
  }

  Submit = e => {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=query&api_key=dc6zaTOxFJmzC&rating=g"
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({ threeGifs: json.data.slice(0, 3) });
      });
  };

  render() {
    return (
      <div>
        <GifSearch Submit={this.Submit} />
        <GifList Gifs={this.state.threeGifs} />
      </div>
    );
  }
}
