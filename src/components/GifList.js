import React from "react";

const GifList = props => {
  return (
    <div>
      <ul>
        {props.gifs.map(gif => {
          return (
            <li key={gif.id}>
              <img
                src={gif.images.fixed_height_downsampled.url}
                alt="gif not found"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GifList;
