import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function MyInfo() {
  return(
    <div>
    <h1> Hellow World</h1>
    <p> this is paragraph... </p>
    <ul>
      <li>india</li>
      <li>USA</li>
      <li>Australia</li>
      <li>UK</li>
    </ul>
    </div>

  )

}


ReactDOM.render(<MyInfo />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
