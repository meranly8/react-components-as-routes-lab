import React from 'react'
import { directors } from '../data'

const Directors = () => {
  const renderDirectors = () => {
    return directors.map(director => (
      <div key={director.name}>
        <h4>Name: {director.name}</h4>
        <p>Movies</p>
        <ul>
          {director.movies.map(movie => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    ))
  }
  
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  )
}

export default Directors
