import React from "react";

const GifList = props => {
  return (
    <div>
      {props.gifs.map(gifObj => {
        console.log(gifObj);
        return (
          <div key={gifObj.id}>
            <iframe title={gifObj.slug} src={gifObj.embed_url} />
            <p>{gifObj.slug}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GifList;
