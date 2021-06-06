import React from 'react'
import { actors } from '../data'

const Actors = () => {
  const renderActors = () => {
    return actors.map(actor => (
      <div className="actor" key={actor.name}>
        <h4>Name: {actor.name}</h4>
        <p>Movies:</p>
        <ul>
          {actor.movies.map(movie => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    ))
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  )
}

export default Actors
