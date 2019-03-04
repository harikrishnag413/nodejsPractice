import React from 'react';
import Joke from "./Joke"


function App() {
const jokeComponents =  jokeData.map( joke => {

      return(  <joke key ={joke.id} question={joke.question} punchLine={joke.punchLine} />    )
  }

  )

  return(
    <div>

      {jokeComponents}

    </div>

  )

}
export default App
