import React from 'react';
import Joke from "./Joke"


function App() {
  return(
    <div>

    <joke
        punchLine="my company name is TEKIANA"
      />
        <joke
            question="What is yoyr company name?"
            punchLine="my company name is TEKIANA"
          />

          <joke
              question="What is yoyr id no?"
              punchLine="my id no is 1111"
            />
            <joke
                question="What is yoyr gender?"
                punchLine="my gender is male"
              />
              <joke
                  question="What is yoyr first name?"
                  punchLine="my first name is hari"
                />
                <joke
                    question="What is yoyr second name?"
                    punchLine="my companysecond name is krishna"
                  />



    </div>

  )

}
export default App
