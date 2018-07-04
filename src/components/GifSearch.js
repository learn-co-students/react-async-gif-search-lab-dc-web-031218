import React from 'react';

const GifSearch = (props) =>{
		return (
			<div>
				<form onSubmit={props.onSubmit}>
					<input type="text" id="search" onChange={props.onChange} value={props.value} />
					<button type="submit" value="submit">Search Gifs</button>
				</form>
			</div>
		);
	}


export default GifSearch;