import React from 'react'

const GifList = (props) => {
  return(
    <ul>
      {props.gifArray.map(gif => {
        return(
          <li key={gif.id}>
            <img src={gif.images.fixed_height_downsampled.url} alt="Loading Error" />
          </li>
        )
      })}
    </ul>
  )
}

export default GifList
