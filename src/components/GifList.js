import React from 'react';

const GifList = (props) =>{
		return (
			<div>
				<ul>
					{props.gifs.map(gif =>
						{
						return <li key={gif.id}><img alt="gif_image" src={gif.images.fixed_height.url}  /></li>
					})}
				</ul>
			</div>
		);
}

export default GifList;