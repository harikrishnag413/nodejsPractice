import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import MyInfo from "./components/MyInfo"
// import App from './App';
//import * as serviceWorker from './serviceWorker';

function App(){
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styles = {fontSize: "30px"}


  if (hours<12){
    timeOfDay= "morning"
    styles.color ="#84756F"
  } else if (hours>=12 && hours<17){

    timeOfDay= "afternoon"
    styles.color ="#2E0927"
  } else {

    timeOfDay= "evening"
    styles.color ="#090000"
  }


return( <h1 style={styles}>Good {timeOfDay}!!...</h1> )



}


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
