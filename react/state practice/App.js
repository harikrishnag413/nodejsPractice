import React, {Component} from 'react';

class App extends Component {

  constructor(){
      super()
      this.state = {
          name: "Hari",
          age: "33"
      }
  }

  render(){ 
       return(
           <div>
               <h1>{this.state.name}<h1/>
               <h3>{htis.state.age} years old.</h3>
          </div>
       )
   }
}


export default App
