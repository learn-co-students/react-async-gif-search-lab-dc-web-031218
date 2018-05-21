import React from 'react'

const GifSearch = (props) => {
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <input type="text" />
        <button>Search Gif!</button>
      </form>
    </div>
  )
}

export default GifSearch
