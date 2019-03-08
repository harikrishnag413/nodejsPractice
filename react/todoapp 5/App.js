import React from 'react';

class App extends React.Component {

  constructor(){
      super()
      this.state = {
          isLoggedin:true
      }
  }

  render(){

       let loggedIn
       if (this.state.isLoggedIn === true){
         loggedIn="In"
       }else{
         loggedIn="Out"
       }
       return(
           <div>
               <h1>You are currently logged {loggedIn} !..</h1>

          </div>
       )
   }
}


export default App
