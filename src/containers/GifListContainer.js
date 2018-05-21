import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component{
  constructor() {
    super()

    this.state = {
      gifArray: []
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let gifURL = `http://api.giphy.com/v1/gifs/search?q=${e.target.children[0].value}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(gifURL)
      .then(resp => resp.json())
      .then(json => {console.log(json.data[0])
          this.setState({
            gifArray: [json.data[0], json.data[1], json.data[2]]
          })
        })
  }

  render() {
    console.log(this.state.gifArray)
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifArray={this.state.gifArray}/>
      </div>
    )
  }
}

export default GifListContainer
