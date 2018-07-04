import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer';
// the App component should render out the GifListContainer component 

import React, { Component } from 'react';

export class App extends Component {
	render() {
		return (
			<div>
				<NavBar title="GifSearch" />
				<GifListContainer />
			</div>
		);
	}
}


export default App;
