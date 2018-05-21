import React from "react";

export default class GifSearch extends React.Component {
  constructor() {
    super();
    this.state = { query: "snake" };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.Submit(this.state.query);
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.query}
          onChange={this.handleChange}
          type="text"
        />
        <button>Submit</button>
      </form>
    );
  }
}
