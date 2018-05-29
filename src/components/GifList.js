import React from "react";

const GifList = ({ Gifs }) => {
  console.log(Gifs);
  return (
    <div>
      {Gifs.map((gif, i) => (
        <div key={i}>
          <img src={gif.images.original.url} alt="gif" />
        </div>
      ))}
    </div>
  );
};
export default GifList;
