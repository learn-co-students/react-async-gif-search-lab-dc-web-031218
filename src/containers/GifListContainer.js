import React from 'react';
import GifList from "../components/GifList"
import GifSearch from '../components/GifSearch'

const urlRoot = "http://api.giphy.com/v1/gifs/search?q=dolphins&api_key=dc6zaTOxFJmzC&rating=g"

class GifListContainer extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			gifs: [],
			value: ""
		}
		this.fetchData(urlRoot)
	}

	fetchData(url){
		fetch(url)
		.then(response => response.json())
		.then((json) => 
			{
				this.setState({gifs: json["data"].slice(0,3)})
			}
		)
	}

	onSubmit = (e) =>{
		e.preventDefault()
		let url = `http://api.giphy.com/v1/gifs/search?q=${this.state.value}&api_key=dc6zaTOxFJmzC&rating=g`
		this.fetchData(url)
	}

	handleChange = (e) =>{
		console.log(e)
		this.setState({value: e.target.value})
	}

	render() {
		return (
			<div>
				<GifList gifs={this.state.gifs} />
				<GifSearch onSubmit={this.onSubmit} value={this.state.value} onChange={this.handleChange}/>
			</div>
		);
	}
}

export default GifListContainer;